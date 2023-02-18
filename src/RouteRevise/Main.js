import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Context from './RoutingContext'

function Main() {
  const {Colour } = useContext(Context)

  return (
    <div className={(Colour) ?'App Dark':'App light'}>
    <header >
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
        </ul>
    </header>
    <Outlet />
    </div>
  )
}

export default Main