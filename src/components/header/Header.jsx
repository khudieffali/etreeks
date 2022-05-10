import { TriangleDownIcon } from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../images/logo (1).png'
import { getCategories } from '../../redux/actions/CategoryAction'
import '../header/header.scss'

const Header = () => {
    const [bckColor, setBckColor] = useState("");
    const categories = useSelector(state => state.categories.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories());
        window.addEventListener("scroll", function () {
            if (this.scrollY > 100) {
                setBckColor("active-header")
            } else {
                setBckColor("")
            }
        })
    }, [dispatch])
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
                                    <TriangleDownIcon className='icon-arrow' />
                                </Link>
                            </li>

                            <li>
                                <Link to='/'>Categories
                                    <TriangleDownIcon className='icon-arrow' />
                                </Link>
                                {/* SubMenu */}
                                <ul className='subMenu'>
                                    {categories && (
                                        categories.map(cat => (
                                            <li key={cat.name}>
                                                <Link to={`/courseList/category/${cat.id}`}>{cat.name}</Link>
                                            </li>
                                        ))
                                    )}



                                </ul>
                                {/* SubMenu  End*/}

                            </li>
                            <li>
                                <Link to='/instructors'>Instructors
                                    <TriangleDownIcon className='icon-arrow' />
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