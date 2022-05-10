import React from 'react'
import { Link } from 'react-router-dom'
import '../single-story/singleStory.scss'
const SingleStory = () => {
  return (
    <div className="single-story">
        <div className="all-text-story">
            <span>March 11, 2020</span>
            <Link to='/'>
                <h2>Integer congue magna at pretium purus pretium</h2>
            </Link>
            <p>An enim nullam tempor sapien gravida donec enim blandit ipsum porta justo integer odio velna vitae auctor integer</p>
            <h3>
            By Joel Peterson
            </h3>
        </div>
    </div>
  )
}

export default SingleStory