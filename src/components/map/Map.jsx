import { Button } from '@chakra-ui/react'
import React from 'react'
import '../map/map.scss'
import banner from '../../images/banner.jpg'
const Map = () => {
  return (
    <section className="map">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="all-map d-flex flex-wrap align-items-center justify-content-between">
                        <div className="col-lg-8 col-12">
                            <div className="left-map-img">
                                <img className='img-fluid' src={banner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                          <div className="right-map-text ps-3 pe-2">
                              <h1 className='mb-3'>
                              Learn something new every day with
                                  <span>eTreeks</span>
                              </h1>
                              <Button colorScheme='red' className='btn-map'>
                                    Find Out More
                                </Button>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Map