import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button } from '@chakra-ui/react';
import '../slider/slider.scss'
import backgroundOne from "../../images/slide-3.jpg"
import backgroundTwo from "../../images/slide-2.jpg"

const Slider = () => {
  return (
    <>
      <Swiper className="mySwiper"
       spaceBetween={15}
       slidesPerView={1}
       autoplay={{delay:2000}}
      >
        <SwiperSlide >
          <div style={{backgroundImage:`url(${backgroundOne})`}} className="slide-course d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slide-single">
                    <h1>High quality courses from the leading experts</h1>
                    <p>Feugiat primis ligula gravida auctor egestas augue viverra mauri tortor <br/> in iaculis placerat an eugiat mauris ipsum undo viverra tortor gravida <br /> purus lorem in tortor a viverr</p>
                    <Button colorScheme='pink' className='btn-slider'>
                    View Popular Courses
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  style={{backgroundImage:`url(${backgroundTwo})`}} className="slide-course d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slide-single">
                    <h1 style={{color:"white"}}>High quality courses from the leading experts</h1>
                    <p style={{color:"white"}}>Feugiat primis ligula gravida auctor egestas augue viverra mauri tortor <br/> in iaculis placerat an eugiat mauris ipsum undo viverra tortor gravida <br /> purus lorem in tortor a viverr</p>
                    <Button colorScheme='pink' className='btn-slider '>
                    View Popular Courses
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div  style={{backgroundImage:`url(${backgroundTwo})`}} className="slide-course d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="slide-single">
                    <h1 style={{color:"white"}}>High quality courses from the leading experts</h1>
                    <p style={{color:"white"}}>Feugiat primis ligula gravida auctor egestas augue viverra mauri tortor <br/> in iaculis placerat an eugiat mauris ipsum undo viverra tortor gravida <br /> purus lorem in tortor a viverr</p>
                    <Button colorScheme='pink' className='btn-slider '>
                    View Popular Courses
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider