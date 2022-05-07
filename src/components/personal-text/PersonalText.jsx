import React from 'react'
import '../personal-text/personalText.scss'
import quote from '../../images/left-quote.png'
const PersonalText = () => {
  return (
    <section className="personalText">
        <div className="container">
            <div className="row justify-content-center  align-items-center">
                <div className="col-lg-12">
                     <div className="all-text">
                         <div className="top-personal-img">
                             <img className='img-fluid' src={quote} alt="" />
                         </div>
                         <div className="bottom-personal-text">
                             <p>An enim nullam tempor sapien gravida donec eTreeks - enim ipsum porta justo integer at odio velna and vitae auctor integer congue magna at pretium purus pretium ligula rutrum luctus risus ultrice luctus blandit congue magna. Sagittis congue augue egestas volutpat egestas magna consequat posuere nunc, eu porttitor neque</p>
                             <h3>Jennifer S.</h3>
                             <span>Online Student (Public Relations)</span>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PersonalText