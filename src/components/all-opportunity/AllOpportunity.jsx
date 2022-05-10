import React from 'react'
import '../all-opportunity/allOpportunity.scss'
import SingleOpportunity from '../single-opportunity/SingleOpportunity'
const AllOpportunity = () => {
    return (
        <div className="all-opportunity">
            <div className="d-flex flex-wrap">
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <SingleOpportunity />
                </div>

            </div>

        </div>
    )
}

export default AllOpportunity