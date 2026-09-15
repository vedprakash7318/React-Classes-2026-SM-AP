import React from 'react'
import './CSS/ProductCard.css'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const ProductCard = ({text,imageUrl,delivery,sellPrice,mrp,offer}) => {
  return (
    <>
        <div className="productCard-outer">
            <div className="productCard-image">
                <div className="productCard-badge">{offer}</div>
                <img src={imageUrl} alt="" />
            </div>
            <div className="productCard-text">
                <p>{text}</p>
                <div className="productCard-price-btn">
                    <p className='product-price'><h4>₹{sellPrice}</h4> <del>₹{mrp}</del></p>
                    <button><FaShoppingCart/></button>
                </div>
                <p className='earliest-delivery'>Earliest Delivery: <span>{delivery}</span></p>
                <div className="product-weight">
                    <div>0.5 kg</div>
                    <div>1 kg</div>
                    <div>2 kg</div>
                </div>
                <p className='product-review'><span>4.6  <FaStar className='product-star'/><FaStar className='product-star'/><FaStar className='product-star'/><FaStar className='product-star'/><FaStarHalfAlt className='product-star'/></span> 300 Reviews</p>
            </div>
        </div>
    
    
    
    </>
  )
}

export default ProductCard