import React, { useState } from 'react'
import MyButton from './Components/MyButton'

const App = () => {
   function hanldeClick(){
    alert("Hello")
  }

  function hanldeClick1(){
    alert("Hello1")
  }

  function hanldeClick2(){
    alert("Hello2")
  }
  return (
    <>
        <h1>App Page </h1>
        <MyButton text="click"  ved={hanldeClick}/> <br /> <br />
        <MyButton text="click1" ved={hanldeClick1}/>
        <MyButton text="click2" ved={hanldeClick2}/>
    </>
  )
}

export default App