import React, { useState } from 'react'

const MyForm = () => {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")
    let [gender,setGender] = useState("")
    function handleSave(){
        console.log(name);
        console.log(email);
        console.log(phone);
        console.log(gender);   
    }
  return (
   <>

    <input type="text" placeholder='Enter your name' name='name' onChange={(e)=>setName(e.target.value)}/> <br /> <br />
    <input type="email" placeholder='Enter your email' name='email' onChange={(e)=>setEmail(e.target.value)}/> <br /> <br />
    <input type='text' placeholder='Enter your phone number' name='phone' onChange={(e)=>setPhone(e.target.value)}/> <br /> <br />
    <input type="radio" name="gender" value="Male" onChange={(e)=>setGender(e.target.value)}/>Male  <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}/>female <br /> <br />
        <button onClick={handleSave}>Save</button>
   
   </>
  )
}

export default MyForm