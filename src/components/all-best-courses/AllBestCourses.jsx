import React, { useEffect } from 'react'
import '../all-best-courses/allBestCourses.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import OneCourse from '../one-course/OneCourse';
import { useDispatch, useSelector } from 'react-redux';
import { getDiscountCourses } from '../../redux/actions/CourseActions';
const AllBestCourses = () => {
       const courses = useSelector(state =>state.coursesDiscount)
        const dispatch = useDispatch()
        useEffect(() => {
                dispatch(getDiscountCourses())
        }, [dispatch])
        return (
                <>
                        <div className="all-category">
                                <Swiper className="mySwiper"
                                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                        spaceBetween={15}
                                        slidesPerView={4}
                                        autoplay={{ delay: 2000 }}
                                >
                                        {courses.courses.map(data => (
                                                <SwiperSlide key={data.id}>
                                                        <OneCourse data={data}/>
                                                </SwiperSlide>
                                        ))}

                                </Swiper>
                        </div>

                </>


        )
}

export default AllBestCourses