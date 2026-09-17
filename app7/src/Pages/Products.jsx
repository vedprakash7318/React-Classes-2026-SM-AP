import React, { useEffect, useState } from 'react'

const Products = () => {
    const [count,setCount] = useState(0)
    const handleFetch=async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data);
    }
    handleFetch()
  return (
    <>
        {count} <br /> <br />
        <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}

export default Products