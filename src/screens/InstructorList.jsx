import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SingleInstructor from '../components/single-instructor/SingleInstructor'
import { getInstructors } from '../redux/actions/InstructorAction'

const InstructorList = () => {
    const instructors = useSelector(state => state.instructors.instructors)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getInstructors())
    }, [dispatch])
    return (
        <div className="courseList pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="all-course">
                            <div className="d-flex flex-wrap">
                                {instructors && (
                                    instructors.map(data => (
                                        <div className="col-lg-3 col-md-6 col-12" key={data.id}>
                                            <SingleInstructor data={data} />
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

export default InstructorList