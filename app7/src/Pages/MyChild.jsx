import React from 'react'

const MyChild = ({handleClick}) => {
    console.log("Child Rendered")
  return (
    <>
        <button onClick={handleClick}>Click</button>
    </>
  )
}
export default MyChild