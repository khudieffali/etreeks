import React from 'react'
import '../goal-single/goalSingle.scss'
import CardMembershipIcon from '@mui/icons-material/CardMembership';

const GoalSingle = () => {
    return (
        <div className='col-lg-4 col-md-6 col-12'>
            <div className="goal-single">
                <div className="d-flex flex-wrap">
                <div className="col-lg-3">
                            <div className="left-goal-icon">
                                <CardMembershipIcon className='member-icon' />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="right-goal-text">
                                <h1>Trusted Content</h1>
                                <p>Congue augue egestas magna volutpat dictum suscipit ipsum egestas magna vitae purus</p>
                            </div>
                        </div>
                </div>
                       
            </div>
        </div>
    )
}

export default GoalSingle