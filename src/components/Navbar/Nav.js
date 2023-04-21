import React from 'react'
import style from './Navbar.module.css'


const Nav = ( { navigationBar, handleOpen, isMenuOpen } ) => {

    console.log(isMenuOpen);
  return (
    <div className={isMenuOpen ? style.MobileNav : style.MobileNav-closed}>
        <div onClick={handleOpen} className={style.Close}>
            <span>X</span>
        </div>
         <div>
            <ul onClick={handleOpen} className={style.Ulist}>
                {navigationBar.map((navLi, index) => (
                    <li key={index}><a  href={navLi.url}>{navLi.name}</a></li>
                ))}
            </ul>
        </div>
       
    </div>
  )
}

export default Nav