'use client'

import React, { useState, useEffect } from 'react'
import style from './Navbar.module.css'
import { AiOutlineMenu } from 'react-icons/ai'
import Nav from './Nav'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // const [width, setWidth] = useState(window.innerWidth);
    // const updateDimensions = () => {
    //     setWidth(window.innerWidth);
    //   };

    //   useEffect(() => {
    //     window.addEventListener("resize", updateDimensions);
    //   }, [window]);

      const handleOpen = () => {
        setIsMenuOpen(prevState => !prevState)
    }

   
  


    const navigationBar = [
        {name: "about", url: '#about' },
        {name:"resume", url:'#resume'},
        {name: "skills", url: '#skills' },
        {name: "projects", url: '#projects'},
        {name: "contact", url: '#contact' }]

  return (
<>        <div className={style.Burger} onClick={handleOpen}>
            <AiOutlineMenu navigationBar={navigationBar}/>
        </div>
    {isMenuOpen && <Nav  navigationBar={navigationBar}  handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>}
    </>

 
  

  )
}

export default Navbar