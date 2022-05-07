import React from 'react'
import '../single-find-out/singleFindOut.scss'
import findImg from '../../images/image-04.png'
import { Button } from '@chakra-ui/react'
const SingleFindOut = () => {
    return (
        <div className="col-lg-6 col-12">
            <div className="single-find-out">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="left-find-img">
                                <img className='img-fluid' src={findImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-find-text">
                                <h2>Become a Teacher</h2>
                                <p>Feugiat primis ligula a risus auctor egestas an augue mauri and viverra tortor iaculis an eugiat viverra</p>
                                <Button colorScheme='pink' className='btn-course'>
                                    View All Courses
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleFindOut