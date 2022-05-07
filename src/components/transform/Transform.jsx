import React from 'react'
import '../transform/transform.scss'
import transform from '../../images/image-01.png'

const Transform = () => {
  return (
    <section className="transform">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single-transform d-flex align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="left-img">
                  <img className='img-fluid' src={transform} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="right-transform-text">
                  <h1>Transform your life through online education</h1>

                  <p>An enim nullam tempor sapien gravida donec porta and blandit ipsum enim justo integer velna vitae auctor integer congue magna and purus pretium risus ligula rutrum luctus ultrice</p>
                  <ul>
                    <li>Nullam rutrum eget nunc varius etiam mollis risus undo</li>
                    <li>Integer congue magna at pretium purus pretium ligula at rutrum risus luctus dolor auctor ipsum blandit purus</li>
                    <li>Risus at congue etiam aliquam sapien egestas posuere</li>
                    <li>At pretium purus integer congue magna pretium ligula at ipsum blandit purus rutrum risus luctus dolor auctor</li>
                  </ul>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Transform