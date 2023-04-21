import style from './Projects.module.css'
import Image from 'next/image'
import {SiExpress, SiSequelize, SiPostgresql,SiNextdotjs,SiReact} from 'react-icons/si'
import {IoLogoCss3, IoLogoJavascript} from 'react-icons/io'
import {AiOutlineHtml5} from 'react-icons/ai'


import ameAgaru from '../../assets/projects/ame-agaru.jpg'
import nintendoOldies from '../../assets/projects/nintendo-oldies.jpg'
import restaurant from '../../assets/projects/restaurant.jpg'
import todo from '../../assets/projects/todo.jpg'




import React from 'react'

const Projects = () => {

    const proj = [
        {
            title: 'Ame Agaru - Full Stack Ecommerce',
            img:ameAgaru,
            url:'',
            techs: [
                <SiReact/>,<SiExpress/>,  <SiPostgresql/>, <SiSequelize/> ]
            },
        {
            title: 'NintendoOldies - React Ecommerce',
            img:nintendoOldies,
            url:'https://nintendo-oldies.vercel.app/',
            techs: [
                <SiReact/>, <IoLogoCss3/>, <IoLogoJavascript/> ]
        },
        {
            title: 'Restaurant - Vanilla Javascript Ecommerce',
            img:restaurant,
            url:'https://famonfa.github.io/tiendaRestoranJapones/',
            techs: [
                <AiOutlineHtml5/>, <IoLogoCss3/>, <IoLogoJavascript/> ]
        },
        {
            title: 'To do list - React.js app',
            img:todo,
            url:'https://famonfa.github.io/todo-list/',
            techs: [
                <SiReact/>, <IoLogoCss3/>, <IoLogoJavascript/> ]
        },
        ]

  return (
    <div id='projects' className={style.ProjectsWrapper}>
        
        <div className={style.ProjectsContainer}>
        <div className={style.title}> 
             <h1>My projects</h1>
        </div>
            {proj.map((pr, index) => (
                <div key={index} className={style.Card}>
               <div className={style.CardBg}></div>
            <Image src={pr.img} alt={pr.img}></Image>
                <div className={style.Techs}>
                    {pr.techs.map((tech, index) => (
                        <div key={index}>
                            <span >{tech}</span>
                        </div>
                    ))}
                </div>
                    <a target="_blank" href={pr.url}><h3>{pr.title}</h3></a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects