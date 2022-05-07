import { Button } from '@chakra-ui/react'
import React from 'react'
import AllCourse from '../all-course/AllCourse'
import '../popular-course/popularCourse.scss'

const PopularCourse = () => {
  return (
    <section className="popular-course">
        <div className="container">
            <div className="row">
            <h1>Most Popular Courses</h1>
                <div className="col-lg-12">
                    <div className="all-popular-course d-flex justify-content-between align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="left-text-all">
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="right-btn-all text-end">
                        <Button colorScheme='pink' className='btn-course'>
                      View All Courses
                    </Button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-12 mt-5">
                    <AllCourse/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PopularCourse