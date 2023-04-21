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
               {key: 1, icon:<SiReact/>},{key: 2, icon:<SiExpress/>}, {key: 3, icon: <SiPostgresql/>}, {key:4, icon:<SiSequelize/>} ]
            },
        {
            title: 'NintendoOldies - React Ecommerce',
            img:nintendoOldies,
            url:'https://nintendo-oldies.vercel.app/',
            techs: [
                {key:1 , icon:<SiReact/>}, {key:2, icon:<IoLogoCss3/>}, {key: 3, icon:<IoLogoJavascript/>} ]
        },
        {
            title: 'Restaurant - Vanilla Javascript Ecommerce',
            img:restaurant,
            url:'https://famonfa.github.io/tiendaRestoranJapones/',
            techs: [
                {key: 1, icon:<AiOutlineHtml5/>}, {key: 2, icon:<IoLogoCss3/>}, {key: 3, icon:<IoLogoJavascript/> }]
        },
        {
            title: 'To do list - React.js app',
            img:todo,
            url:'https://famonfa.github.io/todo-list/',
            techs: [
                {key: 1, icon:<SiReact/>}, {key: 2, icon:<IoLogoCss3/>}, {key: 3, icon:<IoLogoJavascript/>} ]
        },
    ];

    return (
        <div id='projects' className={style.ProjectsWrapper}>
            <div className={style.ProjectsContainer}>
                <div className={style.title}> 
                    <h1>My projects</h1>
                </div>
                {proj.map((pr, index) => (
                    <div key={pr.title} className={style.Card}>
                        <div className={style.CardBg}></div>
                        <Image src={pr.img} alt={pr.img}></Image>
                        <div className={style.Techs}>
                            {pr.techs.map((tech, index) => (
                                <div key={index}>
                                    <span key={tech.key}>{tech.icon}</span>
                                </div>
                            ))}
                        </div>
                        <a target="_blank" href={pr.url}><h3>{pr.title}</h3></a>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;