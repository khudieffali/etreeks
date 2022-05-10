import React from 'react'
import '../instructor/instructor.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import videoImg from '../../images/video.jpg'
import { Link } from 'react-router-dom';
const Instructor = () => {
    return (
        <section className="instructor">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="all-instructor">
                            <div className="col-lg-8 m-auto">
                                <div className="top-instructor text-center">
                                    <h1>Find the right instructor for you from over 10,000 teachers</h1>
                                    <p>Feugiat primis ligula risus auctor laoreet augue egestas</p>
                                </div>
                            </div>
                            <div className="col-lg-11 m-auto">
                                <div className="bottom-video">
                                    <Link to='/'>
                                        <PlayArrowIcon className='icon-play' />
                                    </Link>
                                    <img className='img-fluid text-center' src={videoImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Instructor