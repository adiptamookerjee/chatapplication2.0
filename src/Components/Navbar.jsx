import React from 'react'
import MessageIcon from '@mui/icons-material/Message';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>

      <div className='logo'>
      <p>Chat Application</p>
      <MessageIcon/>
      </div>

      <div className='user'>
        <img className="profilePic"src={'dp.png'} alt=""/>
        <p>John Doe</p>
        <LogoutIcon className='logout'/>
      </div>
    </div>
  )
}

export default Navbar