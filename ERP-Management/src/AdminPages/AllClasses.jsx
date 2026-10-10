import React, { useEffect, useState } from 'react'
import './CSS/AllClasses.css'
import DashboardLayout from '../Components/DashboardLayout'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';


const AllClasses = () => {
    const [modalShow, setModalShow] = useState(false)
    const [modalClass, setModalClass] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [subjects, setSubjects] = useState([])
    const [modalClassData, setModalClassData] = useState([])

    const [rows, setRows] = useState([
        { teacher: "", subject: "" },
    ])



    const [classes, setClasses] = useState([])


    const fetctClasses = async () => {
        try {
            const res = await axios.get("/Data/classdetails.json")
            setClasses(res.data);
        } catch (error) {
            console.log(error);

        }
    }

    const fetchData = async () => {
        try {
            const res = await axios.get('/Data/Subjects.json')
            setSubjects(res.data)


            const res1 = await axios.get('/Data/teachers.json')
            setTeachers(res1.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
        fetctClasses()
    }, [])

    const addMore = () => {
        setRows([...rows, { teacher: "", subject: "" }])
    }



    const handleShow = (data) => {
        setModalClass(true)
        console.log(data);
        setModalClassData(data)
    }
    return (
        <>
            <DashboardLayout>

                <div className="all-classes-header">
                    <h3>All Classes</h3>
                    <button className='all-create-class' onClick={() => setModalShow(true)}>Create Class</button>
                </div>

                <div className="all-classes-table">
                    <Table cellPadding='0' cellSpacing='0' striped bordered>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Class</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                classes.map((c) => (
                                    <tr>
                                        <td>{c._id}</td>
                                        <td>{c.Class}</td>
                                        <td>
                                            <button className='subject-edit-btn'><FaEdit /></button> &emsp;
                                            <button className='subject-edit-btn'><AiFillDelete /></button> &emsp;
                                            <button className='subject-edit-btn' onClick={() => handleShow(c)}><GrView /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>


                <Modal show={modalClass} centered>
                    <Modal.Header>
                        <h2>
                            {modalClassData?.Class ?? "Class Name"}
                        </h2>
                        <button onClick={() => setModalClass(false)}>X</button>
                    </Modal.Header>
                    <Modal.Body>
                        <Table border='1' striped bordered style={{ textAlign: "center" }}>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Teacher</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    modalClassData?.Subjects?.map((d) => (
                                        <tr>
                                            <td>{d.Subject}</td>
                                            <td>{d.Teacher}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>


                        <h1>Fee</h1>
                        <Table bordered striped>
                            <thead>
                                <tr>
                                    <th>Fee Type</th>
                                    <th>Fee Amount</th>
                                    <th>Payment Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    modalClassData?.fee?.map((f)=>(
                                        <tr>
                                            <td>{f.FeeType}</td>
                                            <td>{f.Amount}</td>
                                            <td>{f.PaymentType}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Modal.Body>

                </Modal>








                <Modal show={modalShow} centered>
                    <Modal.Header className='modal-header'>
                        <h3>Create Class</h3>
                        <button onClick={() => setModalShow(false)}>X</button>

                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder='Enter Class Name' /> <br /> <br />

                        {
                            rows.map((index, data) => (
                                <div key={index}>
                                    <select>
                                        <option value="">Select Teacher</option>
                                        {
                                            teachers.map((t) => (
                                                <option value={t.id}>{t.name}</option>
                                            ))
                                        }
                                    </select>
                                    &emsp;
                                    <select>
                                        <option value="">Select Subject</option>
                                        {
                                            subjects.map((s) => (
                                                <option value={s.id}>{s.name}</option>
                                            ))
                                        }
                                    </select>


                                </div>
                            ))

                        }
                        <br /><br />
                        <button onClick={addMore}>Add More</button>

                            <h1>Fee</h1>
                            <select>
                                <option value="--">Select fee Type</option>
                                <option value="">Tution Fee</option>
                                <option value="">Exam fee</option>
                                <option value="">Admission Fee</option>
                                <option value="">Other</option>
                            </select>
                 
                              <input type="text" name='fee' placeholder='Enter Fee in rupees' />
                            <input type="radio"  value='Monthly'/> Monthly
                            <input type="radio"  value='Yearly'/> Yearly
                            <input type="radio"  value='onetime'/> One-Time


<br /> <br />
                        <button>Save</button>

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>


            </DashboardLayout >
        </>
    )
}

export default AllClasses