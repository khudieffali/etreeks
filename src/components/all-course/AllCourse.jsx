import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularCourses } from '../../redux/actions/CourseActions'
import '../all-course/allCourse.scss'
import OneCourse from '../one-course/OneCourse'
const AllCourse = () => {
    const courses = useSelector(state => state.coursesPopular)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularCourses())
    }, [dispatch])
    return (
        <div className="all-course">
            <div className="d-flex flex-wrap">
                {courses.courses.map(data => (
                    <div className="col-lg-3 col-md-6 col-12" key={data.id}>
                        <OneCourse data={data}/>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default AllCourse