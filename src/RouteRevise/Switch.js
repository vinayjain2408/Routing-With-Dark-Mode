import React , { useContext, useState} from 'react'
import Switch from 'react-switch'
import Context from './RoutingContext'

function Theme() {

  const {Colour , setColour} = useContext(Context)
  function handle(){
    if(Colour){
      setColour(false)
    } 
    else{
      setColour(true)
    }
  }


  return (
    <div>
      <Switch 
        onChange={handle}
        checked={Colour}
        className={(Colour) ?'App Dark':'App light'}
        
      />
      <h3>Dark Mode</h3>
    </div>
  )
}

export default Theme




























// import React, { useState } from 'react'
// // import Switch from 'react-switch'

// function Switch() {

//   const [Theme , setTheme] = useState(false)

//   function handleChange(){
//     if(Theme){
//       setTheme('Dark')
//     }
//     else{
//       setTheme('light')
//     }
//   }

//   return (
//     <div className={` App ${Theme}`}>
//      <span onChange={handleChange} checked={Theme}/>
    
//     </div>
//   )
// }

// export default Switch


