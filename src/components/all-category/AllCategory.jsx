import React from 'react'
import '../all-category/allCategory.scss'
import SingleCategory from '../single-category/SingleCategory'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const AllCategory = () => {
    return (
        <>
            <div className="all-category">
                        <Swiper className="mySwiper"
                          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                          spaceBetween={15}
                          slidesPerView={5}
                        >
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>
                            <SwiperSlide >
                                    <SingleCategory />
                            </SwiperSlide>

                        </Swiper>
            </div>

        </>


    )
}

export default AllCategory