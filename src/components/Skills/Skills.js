import style from './Skills.module.css'
import Image from 'next/image'
import {AiOutlineHtml5, AiFillGithub} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript, IoLogoNodejs} from 'react-icons/io'
import {TbBrandRedux} from 'react-icons/tb'
import {SiExpress, SiSequelize, SiPostgresql, SiMysql, SiNextdotjs, SiAdobeillustrator, SiFigma, SiAdobephotoshop,SiReact} from 'react-icons/si'
import React from 'react'

const Skills = () => {

    const skillset = [
        {name: 'html',
        logo: <AiOutlineHtml5/>
    },
        {name: 'css',
        logo: <IoLogoCss3/>
        },
        {
        name: 'Javascript',
        logo: <IoLogoJavascript/>
        },
        {
        name: 'React.js',
        logo: <SiReact/>
        },
        {
        name: 'Next.js',
        logo: <SiNextdotjs/>
        },
        {
        name: 'Redux',
        logo: <TbBrandRedux/>
        },
        {
        name: 'Node',
        logo: <IoLogoNodejs/>
        },
        {
        name: 'Express.js',
        logo:<SiExpress/>
        },
        {
        name: 'Sequelize.js',
        logo:<SiSequelize/>
        },
        {
        name:'PostgreSQL',
        logo: <SiPostgresql/>
        },
        {
        name: 'MySQL',
        logo: <SiMysql/>
        },
        {
        name: 'Github',
        logo: <AiFillGithub/>
        },
        {
        name: 'Adobe Illustrator',
        logo:  <SiAdobeillustrator/>
        },
        {
        name: 'Adobe Photoshop',
        logo: <SiAdobephotoshop/>
        },
        {
        name: 'Figma',
        logo: <SiFigma/>
        }
    ]


  return (
    <div id='skills' className={style.WrapperSkills}>
        <div className={style.h1Wrapper}>
        <h1>Skills</h1>
        </div>
        <div className={style.SkillContainer}>
            {skillset.map((skill, index) => (
                <div className={style.cardSkill} key={index}>
                    <span>{skill.logo}</span>
                    <p>{skill.name}</p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Skills