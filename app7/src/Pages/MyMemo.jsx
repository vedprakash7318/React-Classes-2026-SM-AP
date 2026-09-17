import React, { useEffect, useMemo, useState } from 'react'

const MyMemo = () => {
    const [count,setCount] = useState(0);
    const myCal=useMemo(()=>{
        console.log("Calculation start");
        return "Hello";
    },[])
    let msg = myCal

  return (
    <>
    <h1>Count:- {count}</h1>
    <h3>{msg}</h3>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default MyMemo  