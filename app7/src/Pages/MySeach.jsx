import React, { useRef } from 'react'

const MySeach = () => {
    let inputRef = useRef()
    console.log(inputRef);
    const demo=()=>{
            inputRef.current.value="Ved"
            inputRef.current.focus()
            inputRef.current.style.color="red"
            console.log(inputRef);     
    }
  return (
    <>
        <input type="search" placeholder='Search Something...' ref={inputRef}/>
             <br /> <br />
        <button onClick={demo}>Focus</button>
    </>
  )
}

export default MySeach