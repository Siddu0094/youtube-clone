import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Sidebar = () => {
   const isMenuOpen=useSelector(store=> store.app.isMenuOpen)

    if(!isMenuOpen) return null

  return (
    <div className='p-5 shadow-lg w-48'>
      
      <ul>
      <Link to='/'>  <li>Home</li></Link>
        <li>shorts</li>
        <li>live</li>
        <li>videos</li>

      </ul>
      
      
      <h1 className='font-bold pt-5'>Subcriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>

      </ul>
        <h1 className='font-bold pt-5'>watch later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>

      </ul>
    </div>
  )
}

export default Sidebar
