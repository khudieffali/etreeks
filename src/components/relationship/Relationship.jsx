import React from 'react'
import AllRelationShip from '../all-relationship/AllRelationShip'
import '../relationship/relationship.scss'
const Relationship = () => {
  return (
    <section className="relationship">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="top-relationship text-center">
                        <p>Trusted by companies of all sizes:</p>
                    </div>
                </div>
                <div className="col-lg-12">
                   <AllRelationShip/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Relationship