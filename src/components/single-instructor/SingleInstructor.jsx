import React from 'react'
import { Link } from 'react-router-dom'
import '../single-instructor/singleInstructor.scss'
const SingleInstructor = ({data}) => {
  return (
    <div className="singleInstructor">
        <Link to={`/courseList/instructors/${data.id}`}>   
            <img src={data.photoUrl} alt="" />
            <div className="bottom-text-instructor text-center">
                <h2>{data.fullName}</h2>
                <p>{data.speciality}</p>
            </div>
        </Link>
    </div>
  )
}

export default SingleInstructor