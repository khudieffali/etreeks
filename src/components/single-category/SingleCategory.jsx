import React from 'react'
import '../single-category/singleCategory.scss'
import categoryPhoto from '../../images/photo.png'
const SingleCategory = () => {
  return (
   <div className="category">
       <div className="col-lg-12">
        <div className="all-category-course">
           <div className="category-image text-center">
           <img className='img-fluid' src={categoryPhoto} alt="" />
       </div>
       <div className="category-text text-center">
           <h2>Health & Fitness</h2>
           <p>94 Courses</p>
       </div>
           </div>
      
       </div>
   </div>
  )
}

export default SingleCategory