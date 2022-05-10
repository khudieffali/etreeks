import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import OneCourse from '../components/one-course/OneCourse'
import { getByInstructorCourse } from '../redux/actions/CourseActions'

const CourseInstructorList = () => {
        let { instructorId } = useParams()
        const courses = useSelector(state => state.courseByInstructors.courses)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getByInstructorCourse(instructorId))
        }, [dispatch, instructorId])
  return (
    <div className="courseList pt-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="all-course">
                    <div className="d-flex flex-wrap">
                        {courses && (
                            courses.map(data => (
                                <div className="col-lg-3 col-md-6 col-12" key={data.id}>
                                    <OneCourse data={data} />
                                </div>
                            ))
                        )
                        }


                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default CourseInstructorList