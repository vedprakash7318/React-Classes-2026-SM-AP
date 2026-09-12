import React from 'react'
import './CSS/CategoryCard.css'
const CategoryCard = ({key,text,imageUrl}) => {
    return (
        <>
            <div className='category-card-outer'>
                <div className='category-card-image'>
                    <img src={imageUrl} alt=""/>
                </div>
                <div className='category-card-text'>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default CategoryCard