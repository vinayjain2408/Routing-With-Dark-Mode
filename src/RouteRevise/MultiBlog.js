import React from 'react'
import { Outlet } from 'react-router-dom'

function MultiBlog() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default MultiBlog