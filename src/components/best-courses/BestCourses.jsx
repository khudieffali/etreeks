import { Button } from '@chakra-ui/react'
import React from 'react'
import AllBestCourses from '../all-best-courses/AllBestCourses'
import AllCourse from '../all-course/AllCourse'
import '../best-courses/bestCourses.scss'
const BestCourses = () => {
  return (
    <section className="best-course">
    <div className="container">
        <div className="row">
        <h1>Best Discount Courses of All-Time</h1>
            <div className="col-lg-12">
                <div className="all-best-course d-flex justify-content-between align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="left-text-best">
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-btn-best text-end">
                    <Button colorScheme='pink' className='btn-course'>
                  View All Courses
                </Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-12 mt-5">
                <AllBestCourses />
            </div>
        </div>
    </div>
</section>
  )
}

export default BestCourses