import React from 'react'
import AllOpportunity from '../all-opportunity/AllOpportunity'
import '../opportunity/opportunity.scss'
const Opportunity = () => {
  return (
    <section className="opportunity">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="top-opportunity text-center pb-5">
                        <h1>Best Learning Opportunities</h1>
                        <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <AllOpportunity/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Opportunity