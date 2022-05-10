import { Button } from '@chakra-ui/react'
import React from 'react'
import AllStory from '../all-story/AllStory'
import '../story/story.scss'
const Story = () => {
  return (
    <section className="story">
    <div className="container">
        <div className="row">
        <h1>Best Courses of All-Time</h1>
            <div className="col-lg-12">
                <div className="all-story d-flex justify-content-between align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="left-text-story">
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-btn-story text-end">
                    <Button colorScheme='pink' className='btn-story'>
                  View All Courses
                </Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-12 mt-5">
                <AllStory />
            </div>
        </div>
    </div>
</section>
  )
}

export default Story