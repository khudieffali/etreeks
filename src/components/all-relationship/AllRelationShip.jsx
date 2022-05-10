import React from 'react'
import '../all-relationship/allRelationShip.scss'
import SingleRelationShip from '../single-relationship/SingleRelationShip'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const AllRelationShip = () => {
  return (
    <div className="all-relationship">
    <Swiper className="mySwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={15}
      slidesPerView={5}
    >
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
        <SwiperSlide >
                <SingleRelationShip />
        </SwiperSlide>
     

    </Swiper>
</div>

  )
}

export default AllRelationShip