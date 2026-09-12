import React from 'react'
import MyCard from './Components/MyCard'

const App = () => {
  let data =[
    {id:1,price:20,image:"/images/1.jpg"},
    {id:2,price:40,image:"/images/1.jpg"},
  ]
  return (
    <>
      <MyCard data = {data}/>
    </>
  )
}

export default App