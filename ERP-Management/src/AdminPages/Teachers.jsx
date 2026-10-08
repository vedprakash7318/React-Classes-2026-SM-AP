import React, { useEffect, useState } from 'react'
import './CSS/AllClasses.css'
import DashboardLayout from '../Components/DashboardLayout'
import Modal from 'react-bootstrap/Modal';

import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Teachers = () => {
  const [modalShow, setModalShow] = useState(false)
  const [teacher,setTeachers] = useState([])

   const fetchTeachers = async () => {
    try {
      const res = await axios.get('/Data/teachers.json');
      console.log(res);
      setTeachers(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTeachers()
  }, [])



  return (
   <>
    <DashboardLayout>
          <div className="all-classes-header">
                    <h3>All Teachers</h3>
                    <button className='all-create-class' onClick={() => setModalShow(true)}>Create Teacher</button>
                </div>



           <Table className='subject-table' cellPadding='0' cellSpacing='0' striped bordered>
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Teacher Name</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              teacher.map((subject) => (
                <tr>
                  <td>{subject._id}</td>
                  <td>{subject.name}</td>
                  <td>{subject.mobile}</td>
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
                        <h3>Create Teacher</h3>
                        <button onClick={() => setModalShow(false)}>X</button>

                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>



    </DashboardLayout>
   </>
  )
}

export default Teachers