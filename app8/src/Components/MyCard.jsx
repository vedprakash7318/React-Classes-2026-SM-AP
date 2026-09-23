import React, { useEffect } from 'react'
import Aos from 'aos'
const MyCard = () => {

  useEffect(()=>{
     Aos.init({
      once: false
     });
  })

  return (
    <>
    
      <div style={{height:"300px", width:"300px", background:"red"}} data-aos="fade-up"></div>
    
    </>
  )
}

export default MyCard