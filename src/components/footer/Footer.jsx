import React from 'react'
import { Link } from 'react-router-dom'
import '../footer/footer.scss'
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import logo from '../../images/logo (1).png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="left-logo">
              <img className='img-fluid' src={logo} alt="" />
              <p>Aliquam orci a nullam tempor sapien gravida donec enim ipsum porta justo velna an auctor undo congue magna laoreet augue sapien</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12">
            <div className="link">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link to='/'>About eTreeks</Link>
                </li>
                <li>
                  <Link to='/'>Courses Catalog</Link>
                </li>
                <li>
                  <Link to='/'>Our Testimonials</Link>
                </li>
                <li>
                  <Link to='/'>Premium Learning</Link>
                </li>
                <li>
                  <Link to='/'>From the Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="footer-categories">
              <h2>Popular Categories</h2>
              <ul>
                <li>
                  <Link to='/'>Business English</Link>
                </li>
                <li>
                  <Link to='/'>Software Development</Link>
                </li>
                <li>
                  <Link to='/'>Finance & Accounting</Link>
                </li>
                <li>
                  <Link to='/'>Health and Fitness</Link>
                </li>
                <li>
                  <Link to='/'>Office Productivity</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <div className="right-footer">
              <h2>Stay in Touch</h2>
              <div className="bottom-input">
              <Input placeholder='Your Email Address' className='input-footer' />
                <Button colorScheme='red' className='btn-footer'>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="theEnd">
              <p>
              © Copyright eTreeks 2022
                <span>
                508.746.9892
                </span>
                <span>
                hello@domain.com
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer