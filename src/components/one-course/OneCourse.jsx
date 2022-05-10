import React from 'react'
import { Link } from 'react-router-dom'
import '../one-course/oneCourse.scss'
import courseImg from '../../images/course-1-img.jpg'


const OneCourse = ({ data }) => {
    return (
        <div className="oneSingle">
            <Link to={`/course/${data.id}`}>
                {data && (
                    <div key={data.id}>
                        <img src={data.photoUrl} alt="" />
                        <div className="bottom-text-course">
                            <p className='lang-course  mb-2'>
                                <span>{data.categoryName}</span>
                            </p>
                            <h2>{data.name}</h2>
                            <p className='raiting-course'>({data.raiting} Ratings)</p>
                            {data.discount != 0 && data.discount != null && (
                                <span>
                                    <del className="old-price">${data.price}</del>
                                    ${data.discount}
                                </span>
                            )}
                            {(data.discount == 0 || data.discount==null) &&(
                                <span>
                                    ${data.price}
                                </span>
                            )}

                        </div>
                    </div>
                )}

            </Link>
        </div>
    )
}

export default OneCourse