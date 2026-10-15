import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../Components/DashboardLayout'
import './CSS/Dashboard.css'
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
const Dashboard = () => {

  const [role, setRole] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem("token")
    setRole(localStorage.getItem("role"))
    if (!token) {
      navigate('/login')
    }
  }, [])



  return (
    <>
      <DashboardLayout>
        {
          role == "admin" ? (
            <>
              <div className="dashboard-card-outer">
                <div className="dashboard-cards">
                  <div className="dashboard-card-icon-outer">
                    <div className="dashboard-card-icon">
                      <FaUserGraduate />
                    </div>
                  </div>
                  <div className="dashbaord-card-text">
                    <h3>2000+</h3>
                    <p>Students Registered</p>
                  </div>
                </div>
                <div className="dashboard-cards">
                  <div className="dashboard-card-icon-outer">
                    <div className="dashboard-card-icon">
                      <FaChalkboardTeacher />
                    </div>
                  </div>
                  <div className="dashbaord-card-text">
                    <h3>70+</h3>
                    <p>Teachers Working</p>
                  </div>
                </div>
                <div className="dashboard-cards">
                  <div className="dashboard-card-icon-outer">
                    <div className="dashboard-card-icon">
                      <SiGoogleclassroom />
                    </div>
                  </div>
                  <div className="dashbaord-card-text">
                    <h3>40+</h3>
                    <p>Classes Provides</p>
                  </div>
                </div>
              </div>
            
            </>
          ) : role == 'supperAdmin' ? (
            <h1>Thi is supperAdmin page</h1>
          ) : (
            <h1>Thi is Teacher page</h1>
          )
        }

      </DashboardLayout>

    </>
  )
}

export default Dashboard