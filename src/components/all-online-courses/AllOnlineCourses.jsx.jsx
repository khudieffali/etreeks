import React from 'react'
import '../all-online-courses/allOnlineCourses.scss'
import OneOnlineCourse from '../one-online-courses/OneOnlineCourses'
const AllOnlineCourses = () => {
  return (
    <div className="all-online-course">
        <div className="d-flex flex-wrap">
        <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
                <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
                <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
                <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
                <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
                <div className="col-lg-6 col-12">
                    <OneOnlineCourse/>
                </div>
        </div>
         
               
            </div>
  )
}

export default AllOnlineCourses