import React from 'react'
import styles from './HomeInfo.module.css'
import Navbar from '../Navbar/Navbar'

const HomeInfo = () => {
  return (
    <div className={styles.WrapperHomeInfo}>
         <div className={styles.Texts}/>
        <h1>FACUNDO</h1>
        <h1>MONSEGUR</h1>
        <h1>FRONTEND</h1>
        <h1>DEVELOPER</h1>
        <div/>
    </div>
  )
}

export default HomeInfo