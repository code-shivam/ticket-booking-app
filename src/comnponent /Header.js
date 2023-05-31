import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigation =useNavigate()
  return (
    <div>
      <p>Book your ticket </p>
      <button onClick={()=>navigation('/')}>MovielList</button>
     
    </div>
  )
}

export default Header