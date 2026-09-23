import React, { useCallback, useState } from 'react'
import MyChild from './MyChild'
const MyCallBack = () => {
  const [count,setCount] = useState(0)
  const demo=useCallback(()=>{
    console.log("demo called")
  },[])
  return (
   <>
    <h1>count:- {count}</h1> <br /> <br />
    <MyChild handleClick={demo}/> <br /> <br />
    <button onClick={()=>setCount(count+1)} >+</button>
   </>
  )
}

export default MyCallBack
