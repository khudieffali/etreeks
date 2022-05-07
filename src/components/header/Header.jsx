import { TriangleDownIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo (1).png'
import '../header/header.scss'

const Header = () => {
    const [bckColor,setBckColor]=useState("");
    window.addEventListener("scroll", function(){
        if(this.scrollY>500){
            setBckColor("active-header")
        }else{
            setBckColor("")
        }
    })
  return (
    <header className={`header ${bckColor}`}>
        <div className="container-box">
        <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
                <Link to='/'>
                <img className='img-fluid' src={logo} alt={logo} />
                </Link>
            </div>
            <div className="navMenu">
                <ul className='d-flex p-0 m-0 align-items-center'>
                   <li>
                       <Link to='/'>About
                       </Link>
                   </li>
                   <li>
                       <Link to='/'>Pages
                      <TriangleDownIcon className='icon-arrow'/>
                       </Link>
                   </li>

                   <li>
                       <Link to='/'>Categories
                      <TriangleDownIcon className='icon-arrow'/>
                       </Link>
                      {/* SubMenu */}
                       <ul className='subMenu'>
                           <li>
                               <Link to='/'>Development</Link>
                           </li>
                           <li>
                               <Link to='/'>Finance & Accounting</Link>
                           </li>
                           <li>
                               <Link to='/'>IT & Software</Link>
                           </li>
                           <li>
                               <Link to='/'>Office Productivity</Link>
                           </li>
                           <li>
                               <Link to='/'>Photography</Link>
                           </li>
                           <li>
                               <Link to='/'>Math & Science</Link>
                           </li>
                           <li>
                               <Link to='/'>Languages</Link>
                           </li>
                           <li>
                               <Link to='/'>Marketing</Link>
                           </li>
                           <li>
                               <Link to='/'>Health & Fitness</Link>
                           </li>
                       </ul>
                      {/* SubMenu  End*/}

                   </li>
                   <li>
                       <Link to='/'>Mega Menu
                      <TriangleDownIcon className='icon-arrow'/>
                       </Link>
                       
                   </li>
                   <li>
                       <Link to='/'>Blog</Link>
                   </li>
                   <li>
                       <Link to='/'>Contacts</Link>
                   </li>
                   <li>
                       <Link to='/'>EN</Link>
                   </li>
                </ul>
            </div>
        </div>
        </div>
        
    </header>
  )
}

export default Header