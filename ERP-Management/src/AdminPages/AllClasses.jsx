import React, { useState } from 'react'
import './CSS/AllClasses.css'
import DashboardLayout from '../Components/DashboardLayout'
import Modal from 'react-bootstrap/Modal';


const AllClasses = () => {
    const [modalShow, setModalShow] = useState(false)
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

                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>




            </DashboardLayout >
        </>
    )
}

export default AllClasses