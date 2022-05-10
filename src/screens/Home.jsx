import React from 'react'
import BestCourses from '../components/best-courses/BestCourses'
import CategoryCourse from '../components/category-course/CategoryCourse'
import Courses from '../components/courses/Courses'
import Education from '../components/education/Education'
import FindOut from '../components/find-out/FindOut'
import Goal from '../components/goal/Goal'
import Instructor from '../components/instructor/Instructor'
import Map from '../components/map/Map'
import OnlineCourses from '../components/online-courses/OnlineCourses'
import Opportunity from '../components/opportunity/Opportunity'
import PersonalText from '../components/personal-text/PersonalText'
import PopularCourse from '../components/popular-course/PopularCourse'
import Relationship from '../components/relationship/Relationship'
import Skills from '../components/skills/Skills'
import Slider from '../components/slider/Slider'
import Story from '../components/story/Story'
import Transform from '../components/transform/Transform'

const Home = () => {
  return (
      <>
    <Slider/>
    <Courses/>
    <Transform/>
    <PopularCourse/>
    <Skills/>
    <Education/>
    <CategoryCourse/>
    <OnlineCourses/>
    <PersonalText/>
    <BestCourses/>
    <FindOut/>
    <Goal/>
    <Instructor/>
    <Relationship/>
    <Opportunity/>
    <Story/>
    <Map/>
      </>
   

  )
}

export default Home