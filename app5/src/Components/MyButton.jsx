import React from 'react'

const MyButton = (props) => {
    console.log(props);
    
  return (
    <>
        <h1>Name:- {props.data}</h1>
    
    </>
  )
}

export default MyButton