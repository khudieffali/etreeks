import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseCategoryList from '../screens/CourseCategoryList'
import CourseInstructorList from '../screens/CourseInstructorList'
import CourseVideoContents from '../screens/CourseVideoContents'
import Detail from '../screens/Detail'
import Home from '../screens/Home'
import InstructorList from '../screens/InstructorList'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/course/:id' element={<Detail/>}></Route>
        <Route path='/instructors' element={<InstructorList/>}></Route>
        <Route path='/courseList/category/:categoryId' element={<CourseCategoryList/>}></Route>
        <Route path='/courseList/instructors/:instructorId' element={<CourseInstructorList/>}></Route>
        <Route path='/courseList/videoContent/:courseId' element={<CourseVideoContents/>}></Route>

    </Routes>
  )
}

export default MyRouter