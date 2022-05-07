import { Button } from '@chakra-ui/react'
import React from 'react'
import EducationBottom from '../education-bottom/EducationBottom'
import '../education/education.scss'
const Education = () => {
  return (
   <section className="education pt-5">
       <div className="container">
           <div className="row justify-content-center">
               <div className="col-lg-7">
                   <div className="top-education text-center">
                       <h1>Get Quality Education with eTreeks</h1>
                       <p>Integer congue magna at pretium purus pretium ligula at rutrum luctus risus eros dolor auctor ipsum blandit luctus purus vehicula magna a tempor laoreet</p>
                       <Button colorScheme='red' className='btn-education mt-3'>
                      Start Learning Now
                    </Button>
                   </div>
               </div>
               <div className="col-lg-12">
                <EducationBottom/>
               </div>
           </div>
       </div>
   </section>
  )
}

export default Education