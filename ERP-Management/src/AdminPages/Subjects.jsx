import React, { useEffect, useState } from 'react'
import './CSS/AllClasses.css'
import DashboardLayout from '../Components/DashboardLayout'
import Modal from 'react-bootstrap/Modal';
import './CSS/Subject.css'
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
const Subjects = () => {
  const [modalShow, setModalShow] = useState(false)
  const [subjects, setSubject] = useState([])
  const fetchSubject = async () => {
    try {
      const res = await axios.get('/Data/Subjects.json');
      console.log(res);
      setSubject(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchSubject()
  }, [])

  return (
    <>
      <DashboardLayout>
        <div className="all-classes-header">
          <h3>All Subjects</h3>
          <button className='all-create-class' onClick={() => setModalShow(true)}>Create Subject</button>
        </div>

        {/* Subject Table */}

        <Table className='subject-table' cellPadding='0' cellSpacing='0' striped bordered>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Subject Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              subjects.map((subject) => (
                <tr>
                  <td>{subject._id}</td>
                  <td>{subject.name}</td>
                  <td>
                    <button className='subject-edit-btn'><FaEdit /></button> &emsp;
                    <button className='subject-edit-btn'><AiFillDelete /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>







        <Modal show={modalShow} centered>
          <Modal.Header className='modal-header'>
            <h3>Create Subjects</h3>
            <button onClick={() => setModalShow(false)}>X</button>

          </Modal.Header>
          <Modal.Body className='subject-body'>
            <input type="text" placeholder='Enter Subject Name' />
            <button>Add</button>
          </Modal.Body>
        </Modal>



      </DashboardLayout>
    </>
  )
}

export default Subjects