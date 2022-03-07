import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    // to implement the black Nav background once the user scrolls more than 100px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    //remove the listener before the useEffect fires again
    return () => {
      window.removeEventListener('scroll', null)
    }
  })
  return (
    <div className={`Nav ${show && 'nav_black'}`}>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />

      <img
        className='avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Avatar'
      />
    </div>
  )
}

export default Navbar
