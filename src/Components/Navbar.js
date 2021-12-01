import React from 'react'
import './Navbar.css'

const Navbar= () => {
 return(
 <div className="Nav">
     <img
     className="logo"
     src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
     alt="Netflix Logo"
     />

     <img className="avatar"
     src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
     alt="Avatar"
     />
 </div>
 )
}

export default Navbar;