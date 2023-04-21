'use client'
import React from 'react';
import style from './Contact.module.css'
import { useForm, ValidationError } from '@formspree/react';
import {MdOutlineDoneOutline} from 'react-icons/md'


function Contact() {
  const [state, handleSubmit] = useForm("xoqzydjn");
 
  return (
     <div id='contact' className={style.ContactWrapper}>

        <div className={style.FormWrapper}> 
        <div className={style.h1Wrapper}>
        <h1>Get in touch</h1>
        </div>
     <form onSubmit={handleSubmit}>
        <div className={style.nameEmail}>
        <div>
      <input placeholder='Name' id="name" type="name" name="name"/>
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      </div>
      <div>
    
      <input placeholder='Email' id="email" type="email" name="email"/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      </div>

      <div>
    
    <input className={style.subject} placeholder='Subject' id="subject" type="subject" name="subject"/>
    <ValidationError 
      prefix="Subject" 
      field="subject"
      errors={state.errors}
    />
    </div>

      <textarea
        id="message"
        name="message"
        placeholder='Message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      {state.succeeded && <MdOutlineDoneOutline/> }
      <div className={style.formSquare}></div>

    </form>

    </div>
    </div>
  );
}

export default Contact