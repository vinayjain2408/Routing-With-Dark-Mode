import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Blog from './Blog'
import Main from './Main'
import Contact from './Contact'
import SingleBlog from './SingleBlog'
import './Routing.css'
import MultiBlog from './MultiBlog'
// import Switch from 'react-switch'
import Theme from './Switch'
import Context from './RoutingContext'




function RouteRevise() {

  const [Colour , setColour] = useState(false)

  // const [name, setChecked] = useState(false);

  // function handleChange() {
  //   (name) ? setChecked(false) : setChecked(true)
  // }





  // const [Switch ,setSwitch] =useState(false)

  // function handleChange(e){
  //  setSwitch( e.target.checked())
  // }
  return (
    <>

    <div className={(Colour) ?'top':'bottom'}>
    <Context.Provider value={{Colour , setColour}}>
    <Theme />

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/about' element={<About />}></Route>
            <Route path='/blog' element={<MultiBlog />}>
              <Route index element={<Blog />}></Route>
              <Route path=':id' element={<SingleBlog />}></Route>
            </Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/services' element={<Services />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>

   

    </Context.Provider>

    

    </div>

      {/* <Switch
        onChange={handleChange}
        checked={name}
        className={(name) ? 'App Dark' : 'App light'}
      /> */}
    </>
  )
}

export default RouteRevise






