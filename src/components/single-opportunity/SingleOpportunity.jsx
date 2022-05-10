import React from 'react'
import '../single-opportunity/singleOpportunity.scss'
import education from '../../images/education.png'
const SingleOpportunity = () => {
  return (
    <div className="singleOpportunity">
        <div className="img-opportunity">
            <img className='img-fluid' src={education} alt="" />
        </div>
        <div className="bottom-opportunity">
        <h2>Trending Courses</h2>
        <p>Augue luctus egestas luctus neque purus an ipsum neque dolor primis libero tempus at blandit massa</p>
        </div>
    </div>
  )
}

export default SingleOpportunity