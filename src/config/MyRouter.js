import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../screens/Detail'
import Home from '../screens/Home'

const MyRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/detail:id' element={<Detail/>}></Route>

    </Routes>
  )
}

export default MyRouter