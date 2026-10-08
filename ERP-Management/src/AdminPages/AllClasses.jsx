import React, { useEffect, useState } from 'react'
import './CSS/AllClasses.css'
import DashboardLayout from '../Components/DashboardLayout'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';


const AllClasses = () => {
    const [modalShow, setModalShow] = useState(false)
    const [teachers, setTeachers] = useState([])
    const [subjects, setSubjects] = useState([])

    const [rows, setRows] = useState([
        { teacher: "", subject: "" },
    ])


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
    }, [])

    const addMore = ()=>{
        setRows([...rows, { teacher: "", subject: "" }])
    }
    
    return (
        <>
            <DashboardLayout>

                <div className="all-classes-header">
                    <h3>All Classes</h3>
                    <button className='all-create-class' onClick={() => setModalShow(true)}>Create Class</button>
                </div>


                <Modal show={modalShow} centered>
                    <Modal.Header className='modal-header'>
                        <h3>Create Class</h3>
                        <button onClick={() => setModalShow(false)}>X</button>

                    </Modal.Header>
                    <Modal.Body>
                        <input type="text" placeholder='Enter Class Name' /> <br /> <br />

                        {
                            rows.map((index,data) => (
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
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>




            </DashboardLayout >
        </>
    )
}

export default AllClasses