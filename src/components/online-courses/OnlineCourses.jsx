import React from 'react'
import AllOnlineCourses from '../all-online-courses/AllOnlineCourses.jsx'
import '../online-courses/onlineCourses.scss'

const OnlineCourses = () => {
  return (
    <section className="online-course">
        <div className="container">
            <div className="row">
            <h1>Best Online Courses of 2019</h1>
                <div className="col-lg-12">
                    <div className="all-online-course d-flex justify-content-start align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-online-text-all">
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-5">
                    <AllOnlineCourses/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OnlineCourses