import React, { useEffect } from 'react'
import DetailLeft from '../components/detail-left/DetailLeft'
import DetailRight from '../components/detail-right/DetailRight'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import OnlineCourses from '../components/online-courses/OnlineCourses'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getByIdCourse } from '../redux/actions/CourseActions'
const Detail = () => {
  let {id}=useParams();
  const data = useSelector(state =>state.courseById)
  const dispatch = useDispatch()
  useEffect(() => {
          dispatch(getByIdCourse(id))
  }, [dispatch,id])
  return (
    <section className="detail">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12">
            <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} className='pt-3 ps-3'>
              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href='/'>Back To Blog</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='/'>Egestas volue</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <DetailLeft data={data}/>
          <DetailRight data={data.courses}/>
          <OnlineCourses/>
        </div>
      </div>

    </section>
  )
}

export default Detail