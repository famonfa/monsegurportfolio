import React from 'react'
import style from './Resume.module.css'

const Resume = () => {

    const experience = [
        {
            title:'Multimedia Journalist & Communications Specialist',
            company: 'Agencia Nacional de Discapacidad',
            description: [
                'I worked in journalism, digital press, graphic design, and photography.',
                'Successfully led a team of 30+ employees in a contact center.',
                'Developed skills in creating visually appealing graphics.'            ]
        },
        {
            title:'Salesperson',
            company:'Cardón',
            description:[
                'I worked as a sales professional with strong communication and negotiation skills.',
                'Built relationships with customers in an English-speaking environment.',
                'Gained experience and ability to drive sales growth.'
            ]

        }
    ] 

    const education = [
        {
            title: 'Full Stack Developer',
            academy: 'Henry Bootcamp'
        },
        {
            title: 'Desarrollo Frontend React',
            academy: 'CoderHouse'
        },
        {
            title: 'Technical degree in journalism',
            academy: 'Eter - Escuela de comunicación'
        },
        {
            title: 'Technical degree in music',
            academy: 'Escuela de Música Popular de Avellaneda'
        },
        {
            title: 'Image and Sound Design',
            academy: 'Universidad de Buenos Aires'
        }
    ]

  return (
    <div id='resume' className={style.ResumeWrapper}>
        <div className={style.h1Wrapper}>
        <h1>Resume</h1>
        </div>
        <div className={style.CardsWrapper}>
            <h2>Experience</h2>
            <div className={style.cardWrap}>
                {experience.map((exp, index) => (
                    <div key={index} className={style.CardExperience}>
                    <h3>{exp.title}</h3>
                    <h5>{exp.company}</h5>
                    {exp.description.map((d, index) => (
                        <ul key={index}>
                        <li >{d}</li>
                        </ul>
                    ))}
                    </div>
                ))}
            </div>
            <h2>Education</h2>
            <div className={style.cardWrap}>
                {education.map((ed, index) => (
                    <div key={index} className={style.CardEducation}>
                    <h3>{ed.title}</h3>
                    <h6>{ed.academy}</h6>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Resume