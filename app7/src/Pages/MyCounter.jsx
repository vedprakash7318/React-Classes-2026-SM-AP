import React, { useState } from 'react'

const MyCounter = () => {  
  let [count,setCount] = useState(100)
  function handleClick1(){
      setCount(count+1)
  }
  function handleClick2(){
    setCount(count-1)
    
  }
  return (
    <>
    <h1>Count:- {count}</h1>
    <button onClick={handleClick1}>+</button> <br /> <br />
    <button onClick={handleClick2}>-</button>
    </>
  )
}

export default MyCounter