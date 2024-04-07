import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Clock from './pages/Clock'

function App() {
  return (
    <>
    <Menu/>
      <Routes>
        <Route path='/'/>
        <Route path='/Товары' element={<Clock/>}/>
      </Routes>
    </>
  )
}

export default App
