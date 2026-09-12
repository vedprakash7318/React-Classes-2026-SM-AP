import React from 'react'
import './CSS/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from 'react-bootstrap/Carousel';
import CategoryCard from '../Components/CategoryCard';
const Home = () => {
  let category = [
    {_id:1,text:"CAKES",imageUrl:'/images/c1.webp'},
    {_id:2,text:"FLOWERS",imageUrl:'/images/c2.webp'},
    {_id:3,text:"COMBOS",imageUrl:'/images/c3.webp'},
    {_id:4,text:"PLANTS",imageUrl:'/images/c4.webp'},
    {_id:5,text:"BIRTHDAY",imageUrl:'/images/c5.webp'},
    {_id:6,text:"ANNIVERSARY",imageUrl:'/images/c6.webp'},
  ]



  return (
    <>
      <Header />

      {/* slider start */}
      <div className="slider-outer">
        <Carousel>
          <Carousel.Item>
            <img src="/images/sl1.webp" alt="" className='slider-image'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/sl2.webp" alt="" className='slider-image'/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/sl3.webp" alt="" className='slider-image'/>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* slider end */}

      {/* categoryCard start */}
      <div className="category-card-home-outer">
        {
          category.slice(0,6).map((item)=>(
            <CategoryCard key={item._id} text={item.text} imageUrl={item.imageUrl}/>
          ))
        }
      </div>
      {/* categoryCard end */}




      {/* <Footer/> */}


    </>
  )
}

export default Home