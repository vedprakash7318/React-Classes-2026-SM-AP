import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import axios from 'axios'
import './CSS/Fee.css'
import { Table } from 'react-bootstrap'

const Fee = () => {
  const [students, setStudents] = useState([])
  const [searchedStudent, setSearchedStudent] = useState(null)
  const [search, setSearch] = useState('')
  const [allfee, setAllFee] = useState([])
  const [searchedfee, setSearchedFee] = useState(null)
  const [duePay, setduePay] = useState("")
  const[dueFee,setDueFee] = useState("")

  const fetchStudents = async () => {
    try {
      const res = await axios.get('/Data/students.json')
      setStudents(res.data)
    } catch (error) {
      console.error('Error fetching students:', error)

    }
  }


  const fetechFee = async () => {
    try {
      const res = await axios.get('/Data/fee.json')
      setAllFee(res.data)
      console.log(res.data);

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    fetchStudents()
    fetechFee()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const query = search.trim().toLowerCase()

    if (!query) {
      setSearchedStudent(null)

      return
    }



    const student = students.find((student) =>
      [student.PhoneNumber, student.Email, student.RegNo].some(
        (value) => String(value ?? '').toLowerCase() === query
      )
    )
    if (student) {
      setSearchedStudent(student)

    } else {
      setSearchedStudent(null)

    }

    const fee = allfee.filter((f) => {
      return f.RegNo === student?.RegNo
    })
    setSearchedFee(fee);



  }

  const handleSetPay = (f) => {
    setduePay(f)
    setDueFee(String(Number(f.Amount)-Number(f.paidAmount)))
  }



  const collectfee = ()=>{
    const option = {
      key:"rzp_test_6kz5nGEzi8uXRw",
      amount: Number(dueFee) * 100,
      currency:'INR',
      name:"ERP-PORTAL",
      description:"Fee Payment",
      image:"/images/logo-erp.png",
      handler:function(response){
        alert("Payment Successful");
      },
      modal:{
        ondismiss:function(r){  
          console.log(r);
          alert("Payment Cancelled");
        }
      },
      theme:{
        color:"#33cc94"
      }
    }
    const rzpay = new window.Razorpay(option);
    rzpay.open();
  }






  const profileName = searchedStudent?.Name || 'Student'
  const initials = profileName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()




  return (
    <DashboardLayout>
      <div className="collect-fee-page">

        <div className="collect-fee-heading">
          <div>
            <span className="collect-fee-eyebrow">STUDENT MANAGEMENT</span>
            <h1>Fee Collection</h1>
            <p>Search student details and manage fee collection.</p>
          </div>

          <div className="collect-fee-heading-icon">₹</div>
        </div>

        <form className="collect-fee-search-card" onSubmit={handleSearch}>
          <div className="collect-fee-search-icon">⌕</div>

          <div className="collect-fee-search-content">
            <label htmlFor="collect-fee-search">
              Search Student
            </label>
            <input
              id="collect-fee-search"
              className="collect-fee-search-input"
              type="text"
              placeholder="Enter Phone Number, Email or Reg. No."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="collect-fee-search-button" type="submit">
            Search Student
          </button>
        </form>


        {!searchedStudent && (
          <div className="collect-fee-empty-state">
            <div className="collect-fee-empty-icon">⌕</div>
            <h2>Find a Student</h2>
            <p>
              Enter the student's phone number, email or registration number
              to view their profile and collect fees.
            </p>
          </div>
        )}

        {searchedStudent && (
          <div className="collect-fee-profile">

            <div className="collect-fee-profile-header">
              <div className="collect-fee-avatar">
                {initials || 'ST'}
              </div>

              <div className="collect-fee-profile-title">
                <span className="collect-fee-profile-label">
                  STUDENT PROFILE
                </span>
                <h2>{searchedStudent.Name || 'N/A'}</h2>
                <p>
                  Registration No: {searchedStudent.RegNo || 'N/A'}
                </p>
              </div>

              <span className="collect-fee-status">
                Profile Found
              </span>
            </div>

            <div className="collect-fee-section">
              <h3 className="collect-fee-section-title">
                Personal Information
              </h3>

              <div className="collect-fee-info-grid">
                <div className="collect-fee-info-item">
                  <span>Registration Number</span>
                  <strong>{searchedStudent.RegNo || 'N/A'}</strong>
                </div>

                <div className="collect-fee-info-item">
                  <span>Student Name</span>
                  <strong>{searchedStudent.Name || 'N/A'}</strong>
                </div>

                <div className="collect-fee-info-item">
                  <span>Father's Name</span>
                  <strong>{searchedStudent.FatherName || 'N/A'}</strong>
                </div>



                <div className="collect-fee-info-item">
                  <span>Phone Number</span>
                  <strong>{searchedStudent.PhoneNumber || 'N/A'}</strong>
                </div>
                <div className="collect-fee-info-item">
                  <span>Current Class</span>
                  <strong>
                    {searchedStudent.currentClass ||
                      searchedStudent.CurrentClass ||
                      searchedStudent.Class ||
                      searchedStudent.LastClass ||
                      'N/A'}
                  </strong>
                </div>
              </div>
            </div>



            <div className='fee-table'>
              <Table style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th>Reg No</th>
                    <th>Fee Name</th>
                    <th>Fee Type</th>
                    <th>Paid Amount</th>
                    <th>Due Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>


                <tbody>
                  {
                    searchedfee.map((f) => (
                      <tr key={f._id}>
                        <td>{f.RegNo}</td>
                        <td>{f.FeeType}</td>
                        <td>{f.PaymentType}({f?.FeeMonth})</td>
                        <td>{f.paidAmount}</td>
                        <td>{f.Amount - f.paidAmount}</td>
                        <td>{(f.Amount - f.paidAmount === 0) ? "No Dues" : <button onClick={() => handleSetPay(f)}>Pay</button>}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>

            </div>

            
              <h3 className="collect-fee-section-title">
                Fee Details
              </h3>

              <div className="collect-fee-payment-grid">
                <div className="collect-fee-field">
                  <label htmlFor="collect-fee-due">
                    Total Fee (₹)
                  </label>
                  <input
                    id="collect-fee-due"
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="Enter due fee"
                    value={duePay?.Amount}
                    required
                    disabled
                  />
                </div>
                <div className="collect-fee-field">
                  <label htmlFor="collect-fee-paid">
                    Fee Type
                  </label>
                  <input
                    id="collect-fee-paid"
                    type="text"
                    min="0.01"
                    step="0.01"
                    placeholder="Enter amount to collect"
                    value={duePay?.PaymentType}
                    disabled
                  />
                </div>

                <div className="collect-fee-field">
                  <label htmlFor="collect-fee-paid">
                    Paid Amount (₹)
                  </label>
                  <input
                    id="collect-fee-paid"
                    type="number"
                    min="0.01"
                    step="0.01"
                    placeholder="Enter amount to collect"
                    value={duePay?.paidAmount}
                    disabled
                  />
                </div>
                <div className="collect-fee-field">
                  <label htmlFor="collect-fee-paid">
                    Due Amount (₹)
                  </label>
                  <input
                    id="collect-fee-paid"
                    type='text'
                    placeholder="Enter amount to collecfhjt"
                    value={duePay?.Amount - duePay?.paidAmount}
                    onChange={(e)=>setDueFee(e.target.value)}
                    required

                  />
                </div>


                <div className="collect-fee-field collect-fee-field-full">
                  <label htmlFor="collect-fee-remark">
                    Remark
                  </label>
                  <textarea
                    id="collect-fee-remark"
                    rows="3"
                    placeholder="Enter payment remark..."

                  />
                </div>

              </div>

              <div className="collect-fee-payment-footer">
                <div className="collect-fee-due-summary">
                  <span>Remaining Due</span>
                  <strong>
                    ₹00

                  </strong>
                </div>

                <button
                  className="collect-fee-submit-button"
                  type="submit"
                  onClick={collectfee}
                >
                  Collect Fee
                </button>
              </div>
            

          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Fee
