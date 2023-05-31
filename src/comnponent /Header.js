import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Header.css"
function Header() {
  const navigation =useNavigate()
  return (
    <div className='home'>
      <h1>Book your ticket </h1>
      <button  className='movielistbtn' onClick={()=>navigation('/')}>MovielList</button>
     
    </div>
  )
}

export default Header