import React from 'react'
import { Link } from 'react-router-dom'
import '../one-course/oneCourse.scss'
import courseImg from '../../images/course-1-img.jpg'
const OneCourse = () => {   
  return (
   <div className="oneSingle">
       <Link to='/'>
           <img src={courseImg} alt="" />
           <div className="bottom-text-course">
               <p className='lang-course  mb-2'>
                   <span>Languages</span>
                   <span>English</span>
               </p>
               <h2>Beginner Level English - Foundations</h2>
               <p className='raiting-course'>4.5 (26 Ratings)</p>
               <span>
                   <del className="old-price">$149.99</del>
                   $138.99
               </span>
           </div>
       </Link>
   </div>
  )
}

export default OneCourse