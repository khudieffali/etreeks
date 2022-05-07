import React from 'react'
import { Link } from 'react-router-dom'
import '../one-online-courses/oneOnlineCourses.scss'
const OneOnlineCourse = () => {
    return (
        <div className="oneOnlineSingle">
            <Link to='/'>
                <div className="d-flex flex-wrap">
                <div className="col-lg-8">
                            <div className="bottom-online-text-course">
                                <h2>English for Beginners: Intensive English Speaking Course</h2>
                                <p>
                                    <span>54 Total Hours - Updated 2/2020</span>
                                    <br />
                                    <span>4.89 (331 Reviews)</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="bottom-center-text">
                                <p>7348</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="bottom-right-text">
                            <span>
                                $138.99
                                <br />
                                <del className="old-price">$149.99</del>
                            </span>
                            </div>
                        </div>
                </div>
                   
            </Link>
        </div>
    )
}

export default OneOnlineCourse