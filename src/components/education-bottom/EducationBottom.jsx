import React from 'react'
import '../education-bottom/educationBottom.scss'
import CardMembershipIcon from '@mui/icons-material/CardMembership';
const EducationBottom = () => {
  return (
    <div className='bottom-education'>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-2 col-md-4 col-6">
                    <div className="education-single text-center">
                       <CardMembershipIcon className='member-icon'/>
                        <h2>TRENDING COURSES</h2>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <div className="education-single text-center">
                       <CardMembershipIcon className='member-icon'/>
                        <h2>TRENDING COURSES</h2>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <div className="education-single text-center">
                       <CardMembershipIcon className='member-icon'/>
                        <h2>TRENDING COURSES</h2>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <div className="education-single text-center">
                       <CardMembershipIcon className='member-icon'/>
                        <h2>TRENDING COURSES</h2>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <div className="education-single text-center">
                       <CardMembershipIcon className='member-icon'/>
                        <h2>TRENDING COURSES</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EducationBottom