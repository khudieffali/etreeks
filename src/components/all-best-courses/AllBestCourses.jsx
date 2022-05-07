import React from 'react'
import '../all-best-courses/allBestCourses.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import OneCourse from '../one-course/OneCourse';
const AllBestCourses = () => {
    return (
        <>
            <div className="all-category">
                        <Swiper className="mySwiper"
                          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                          spaceBetween={15}
                          slidesPerView={4}
                          autoplay={{delay:2000}}
                        >
                            <SwiperSlide >
                                    <OneCourse />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                            <SwiperSlide >
                                    <OneCourse/>
                            </SwiperSlide>
                        </Swiper>
            </div>

        </>


    )
}

export default AllBestCourses