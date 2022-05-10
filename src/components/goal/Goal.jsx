import React from 'react'
import GoalSingle from '../goal-single/GoalSingle'
import '../goal/goal.scss'
import goalImg from '../../images/image-03.jpg'
const Goal = () => {
  return (
    <section className="goal">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="top-goal">
                    <h2>Our goal is to make online education work for everyone</h2>
                    <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus efficitur ipsum primis and cubilia laoreet augue egestas luctus donec diam. Curabitur ac dapibus libero mauris donec ociis and neque. Phasellus blandit tristique justo ut aliquam. Aliquam vitae molestie nunc sapien justo, aliquet non molestie augue tempor sapien</p>
                    <img className='img-fluid' src={goalImg} alt="" />
                    </div>
                </div>
                <div className="col-lg-11">
                    <div className="bottom-goal">
                        <div className="d-flex flex-wrap justify-content-between">
                             <GoalSingle/>
                             <GoalSingle/>
                             <GoalSingle/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Goal