import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {
  const [user, setUser] = useState([])
  const [email, setEmail] = useState("")
  const [step, setStep] = useState(1)

  const fetchData = async () => {
    const res = await axios.get("/Data/Users.json")
    console.log(res.data);
    setUser(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  const sendOtp = async () => {
    let existingUser=user.find((u)=>u?.email==email)
    console.log(existingUser);
    
    if(email==existingUser?.email){
      setStep(2)
    }else{
      alert("User Not Found")
    }
  }
  return (
    <>
      <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
      
      {
        step == 2 ?
          <div>
            <input type="text" placeholder='Enter OTP' onChange={(e) => setEmail(e.target.value)} /> <br /> <br />
          </div> : ""
      }
      
      <button onClick={sendOtp}>Send OTP</button>

    </>
  )
}

export default Login