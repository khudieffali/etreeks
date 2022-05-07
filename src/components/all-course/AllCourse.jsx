import React from 'react'
import '../all-course/allCourse.scss'
import OneCourse from '../one-course/OneCourse'
const AllCourse = () => {
  return (
    <div className="all-course">
        <div className="d-flex flex-wrap">
        <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    <OneCourse/>
                </div>
        </div>
           
   </div>
  )
}

export default AllCourse