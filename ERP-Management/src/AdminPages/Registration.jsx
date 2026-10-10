import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import './CSS/Registration.css'
import axios from 'axios'
const Registration = () => {
  const [classDetails,setClassDetails] = useState([])

  const fetchClassDetails = async()=>{
    try {
      const res = await axios.get('/Data/classdetails.json')
      setClassDetails(res.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    fetchClassDetails()
  },[])
  return (
    <>
      <DashboardLayout>
          <div>Add Students</div>
          <div className="registation-info">
            <span>Registration Date</span>
            <span>{Date.now()}</span>
            <span>Registration Number</span>
            <span>Auto</span>
            <span>Session</span>
            <span>2026-2027</span>
          </div>

          <div className="regitration-container">
            <h2>Personal Information</h2>
              <label>Student Name</label>
              <input type="text" name="name" placeholder='Student Name' />
              <label>Photo</label>
              <input type="file" name="photo"/>
              <label>Phone Number</label>
              <input type="text" name="phone" placeholder='Student Phone Number' />
              <label>Email</label>
              <input type="text" name="email" placeholder='Student Email' />
              <label>DOB</label>
              <input type="date"/>
              <label>Gender</label>
              <input type="radio" value="Male" name='gender'/>Male
              <input type="radio" name='gender' value="Female"/>Female
              <input type="radio" name='gender' value="Others"/>Others
              <label>Adhar Number (optional)</label>
              <input type="text" name="adharNumber" placeholder='Student Adhar Number' />
              <label>Father's Name</label>
              <input type="text" name="fName" placeholder='Student Father`s Name' />
              <label>Mother's Name</label>
              <input type="text" name="MName" placeholder='Student Mother`s Name' />
              <label>Category</label>
              <select name="category">
                <option value="General">General</option>
                <option value="EWS">EWS</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              <label>Address</label>
              <input type="text" name="address" placeholder='Student Address' />
              <input type="text" name="zip Code" placeholder='Zip Code' />

              <h2>Last School Information</h2>      
              <label>Last School Namee</label>
              <input type="text" name="lastSchoolName" placeholder='Last School Name' />
              <label>Last School Class</label>
              <input type="text" name="lastSchoolClass" placeholder='Last School Class' />
              <label>Last School Code</label>
              <input type="text" name="lastSchoolCode" placeholder='Last School Code' />
              <label>Last Class Total Gained Number</label>
              <input type="text" name="lastClassTotalGainedNumber" placeholder='Last Class Total Gained Number' />


              <h2>Other Information</h2>
              <label>Class</label>
              






          </div>
          
      </DashboardLayout>
    </>
  )
}

export default Registration