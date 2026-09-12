import React from 'react'
import '../App.css'
const MyCard = ({data}) => {
    console.log(data[0].image);
    
  return (
    <>
        <div className='cardOuter'>
            <div className="card-image">
                <img src={data[0].image} alt="" />
            </div>
            <p className='card-price'>
                Price: {data[0].price}
            </p>
        </div>
    
    </>
  )
}

export default MyCard