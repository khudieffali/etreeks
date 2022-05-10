import React from 'react'
import '../all-story/allStory.scss'
import SingleStory from '../single-story/SingleStory'
const AllStory = () => {
  return (
    <div className="all-story">
    <div className="d-flex flex-wrap">
        <div className="col-lg-3 col-md-6 col-12">
            <SingleStory />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <SingleStory />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <SingleStory />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
            <SingleStory />
        </div>

    </div>

</div>
  )
}

export default AllStory