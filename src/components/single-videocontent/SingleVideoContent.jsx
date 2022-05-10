import React from 'react'
import { Link } from 'react-router-dom'
import '../single-videocontent/singleVideoContent.scss'
import { AspectRatio } from '@chakra-ui/react'
const SingleVideoContent = ({ data }) => {
    return (
        <div className="videoContent">
            <Link to='/'>
                <AspectRatio maxW='560px' ratio={1}>
                    <iframe
                        title='naruto'
                        src={data.videoUrl}
                        allowFullScreen
                    />
                </AspectRatio>
                <div className="bottom-text-video">
                    <h2>{data.name}</h2>
                    <p>
                        {data.description}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default SingleVideoContent