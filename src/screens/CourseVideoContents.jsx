import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SingleVideoContent from '../components/single-videocontent/SingleVideoContent'
import { getCourseVideoContent } from '../redux/actions/VideoContentAction'

const CourseVideoContents = () => {
    let { courseId } = useParams()
    const videos = useSelector(state => state.videos.videos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourseVideoContent(courseId))
    }, [dispatch, courseId])
    console.log(videos)
    return (
        <div className="videoContent pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="all-video">
                            <div className="d-flex flex-wrap">
                                {videos && (
                                    videos.map(data => (
                                        <div className="col-lg-3 col-md-6 col-12">
                                            <SingleVideoContent data={data}/>
                                        </div>
                                    ))
                                )}

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CourseVideoContents