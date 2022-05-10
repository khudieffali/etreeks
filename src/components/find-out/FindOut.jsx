import React from 'react'
import '../find-out/findOut.scss'
import SingleFindOut from '../single-find-out/SingleFindOut'
const FindOut = () => {
  return (
    <section className="find-out">
        <div className="container">
            <div className="row">
             <SingleFindOut/>
             <SingleFindOut/>
            </div>
        </div>
    </section>
  )
}

export default FindOut