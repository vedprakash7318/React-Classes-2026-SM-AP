import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
const Students = () => {
    return (
        <>
            <DashboardLayout>

                <div className="students-header">
                    <h3>All Students</h3>
                    <input type="search" placeholder='Search by name,email,phone'/>
                </div>

                <div className="student-conatiner">
                        
                </div>

            </DashboardLayout>
        </>

    )
}

export default Students
