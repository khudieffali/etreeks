import { Button } from '@chakra-ui/react'
import React from 'react'
import AllCategory from '../all-category/AllCategory'
import '../category-course/categoryCourse.scss'
const CategoryCourse = () => {
  return (
    <section className="category-course">
    <div className="container">
        <div className="row">
        <h1>Top Trending Categories</h1>
            <div className="col-lg-12">
                <div className="all-category-course d-flex justify-content-between align-items-center">
                <div className="col-lg-6 col-md-12">
                    <div className="left-text-category">
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-btn-category text-end">
                    <Button colorScheme='pink' className='btn-category'>
                  View All Categorie
                   </Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-12 mt-5">
                <AllCategory/>
            </div>
        </div>
    </div>
</section>
  )
}

export default CategoryCourse