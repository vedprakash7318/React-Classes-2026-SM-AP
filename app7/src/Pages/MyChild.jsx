import React from 'react'

const MyChild = React.memo(
  ({handleClick}) => {
    console.log("Child Rendered")
  return (
    <>
        <button onClick={handleClick}>Click</button>
    </>
  )
}
)
export default MyChild