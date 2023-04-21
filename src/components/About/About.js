import React from 'react'
import Link from 'next/link';
import style from './About.module.css'
import Image from 'next/image'
import imgOne from '../../assets/imgOne.png'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const About = () => {
  return (
    <div id='about' className={style.WrapperAround}>
        <div className={style.AboutCard}>
            <div className={style.ImageDiv} >
                <Image className={style.Image} src={imgOne} alt='at the street'></Image>
                <div class={style.SquareDiv}></div>
                <div class={style.SquareDivTwo}></div>

            </div>
            <div className={style.myInfo}>
                <div className={style.headings}>
                <div>
                <h3>I am <span className={style.Name}>Facundo Monsegur</span>, a visual UX/UI Designer and Front-End Developer</h3>
                </div>
                <div className={style.Line}></div>
                <p>As a web developer, I am passionate about creating websites that not only meet the latest design standards, but also deliver dynamic and responsive user experiences. My goal is to turn your vision and ideas into meaningful, useful products that meet your business goals and exceed your expectations.</p>
                </div>
                <div className={style.LineTwo}></div>
                <div className={style.Information}>
                    <p>monseguracundo@gmail.com</p>
                </div>
                <div className={style.Information}> 
                    <p>+549 11 3135 3193</p>
                    <p>Buenos Aires, Argentina</p>
                </div>
                <div className={style.Socials}>
                    <a target="_blank" href='https://www.linkedin.com/in/facundo-monsegur-b850b723a/'><AiOutlineLinkedin/></a>
                    <a target="_blank" href='https://github.com/famonfa'> <AiOutlineGithub/></a>
                   
                </div>
               <Link  target="_blank" href="https://drive.google.com/file/d/1ft0xwUS7pUIx-ZpEFRm1_jNdZ3GRCSC6/view?usp=sharing" download ><button className={style.ButtonCV}>Download CV</button></Link>
            </div>
        </div>

    </div>
  )
}

export default About