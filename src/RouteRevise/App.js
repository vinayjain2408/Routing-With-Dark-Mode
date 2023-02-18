import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Main from './Main'
import Contact from './Contact'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App






