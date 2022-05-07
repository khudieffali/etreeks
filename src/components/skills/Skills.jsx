import React from 'react'
import '../skills/skills.scss'
import personal from '../../images/image-02.png'
import { Button } from '@chakra-ui/react'
const Skills = () => {
  return (
    <section className="skills">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="single-skills d-flex align-items-center">
          <div className="col-lg-6 col-md-12">
              <div className="right-skills-text">
                <h1>Learn new personal & professional skills online</h1>

                <p>An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer velna vitae auctor integer congue magna and purus pretium risus ligula rutrum luctus ultrice</p>
                <ul>
                  <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
                  <li>Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus</li>
                  <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                  <li>At pretium purus integer congue magna pretium ligula at ipsum blandit purus rutrum risus luctus dolor auctor</li>
                </ul>
                <Button colorScheme='red' className='btn-skills mt-5'>
                      Start Learning Now
                    </Button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="left-img-skills">
                <img className='img-fluid' src={personal} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills