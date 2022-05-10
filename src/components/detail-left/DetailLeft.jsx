import React from 'react'
import Comment from '../comment/Comment'
import DetailAccordion from '../detail-accordion/DetailAccordion'
import '../detail-left/detailLeft.scss'
import RequirementStep from '../requierment-step/RequirementStep'
import Step from '../step/Step'

const DetailLeft = ({data}) => {
    return (
        <div className="col-lg-8">
            <div className="detailLeft">
                <Step data={data}/>
                <RequirementStep />
                <RequirementStep />
                <RequirementStep />
                <DetailAccordion />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}

export default DetailLeft