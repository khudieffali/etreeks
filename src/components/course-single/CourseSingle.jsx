import React from 'react'
import "../course-single/courseSingle.scss"
import MenuBookIcon from '@mui/icons-material/MenuBook';
const CourseSingle = (icons) => {
  return (
    <div className='courseSingle'>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="all-course d-flex align-items-center">
              <div className="col-lg-2">
                 <div className="left-icon">
                   <MenuBookIcon className='icon-book'/>
                 </div>
              </div>
              <div className="col-lg-10">
                <div className="right-text ms-2">
                <h5>2,769 online courses</h5>
                <p>Explore a variety of fresh topics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CourseSingle