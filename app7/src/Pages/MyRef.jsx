import React, { useRef, useState } from 'react'

const MyRef = () => {
    const [count,setCount] = useState(0)
    let pRef= useRef(0)

    function demo(){
        setCount(count+1)
    }

    function updateRef(){
        pRef.current=pRef.current+1
        console.log(pRef.current);
        
    }
  return (
    <>
    <h1>Count:- {count}</h1>
    <h1>P-Ref:-{pRef.current}</h1>
    <button onClick={demo}>+</button> <br /> <br />
    <button onClick={updateRef}>useRef</button>
    </>
  )
}

export default MyRef