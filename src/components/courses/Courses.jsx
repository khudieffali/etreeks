import React from 'react'
import CourseSingle from '../course-single/CourseSingle'
import '../courses/courses.scss'
const Courses = () => {
  return (
    <section className='about-course'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
          <CourseSingle/>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
          <CourseSingle />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
          <CourseSingle />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses