import React from 'react'
import './CSS/Home.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from 'react-bootstrap/Carousel';
import CategoryCard from '../Components/CategoryCard';
import ProductCard from '../Components/ProductCard';
const Home = () => {
  let category = [
    { _id: 1, text: "CAKES", imageUrl: '/images/c1.webp' },
    { _id: 2, text: "FLOWERS", imageUrl: '/images/c2.webp' },
    { _id: 3, text: "COMBOS", imageUrl: '/images/c3.webp' },
    { _id: 4, text: "PLANTS", imageUrl: '/images/c4.webp' },
    { _id: 5, text: "BIRTHDAY", imageUrl: '/images/c5.webp' },
    { _id: 6, text: "ANNIVERSARY", imageUrl: '/images/c6.webp' },
  ]



  let products = [

    { _id: 1, text: "Belgium Chocolate Cakes", imageUrl: '/images/p1.webp', sellPrice: 899, mrp: 1099, delivery: "Today", offer: "30%" },
    { _id: 2, text: "Belgium Chocolate Cakes", imageUrl: '/images/p2.webp', sellPrice: 399, mrp: 1099, delivery: "18/09/2026", offer: "25%" },
    { _id: 3, text: "Belgium Chocolate Cakes", imageUrl: '/images/p3.webp', sellPrice: 599, mrp: 1099, delivery: "Today", offer: "88%" },
    { _id: 4, text: "Belgium Chocolate Cakes", imageUrl: '/images/p4.webp', sellPrice: 299, mrp: 1099, delivery: "Today", offer: "20%" },
    { _id: 5, text: "Belgium Chocolate Cakes", imageUrl: '/images/p5.webp', sellPrice: 299, mrp: 1099, delivery: "Today", offer: "15%" },

  ]


  return (
    <>
      <Header />

      {/* slider start */}
      <div className="slider-outer">
        <Carousel>
          <Carousel.Item>
            <img src="/images/sl1.webp" alt="" className='slider-image' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/sl2.webp" alt="" className='slider-image' />
          </Carousel.Item>
          <Carousel.Item>
            <img src="/images/sl3.webp" alt="" className='slider-image' />
          </Carousel.Item>
        </Carousel>
      </div>
      {/* slider end */}

      {/* categoryCard start */}
      <div className="category-card-home-outer">
        {
          category.slice(0, 6).map((item) => (
            <CategoryCard key={item._id} text={item.text} imageUrl={item.imageUrl} />
          ))
        }
      </div>
      {/* categoryCard end */}


      {/* products start */}

      <div className="category-card-home-outer">
        {
          products.slice(0, 5).map((item) => (
            <ProductCard key={item._id} offer={item.offer} text={item.text} imageUrl={item.imageUrl} sellPrice={item.sellPrice} mrp={item.mrp} delivery={item.delivery} />
          ))
        }
      </div>

      {/* products end */}


      {/*  */}


      <Footer/>


    </>
  )
}

export default Home