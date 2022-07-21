import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Formular.sass'


function Formular(){

    const [message, setMessage] = useState(null)
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        if(e.target.user_name.value === '') {
            setMessage('Please write a name')
            return
        } else if(e.target.user_email.value === '') {
            setMessage('Email is not valid')
            return
        } else if(e.target.message.value === '') {
            setMessage('There is no message to send')
            return
        }
    
        emailjs.sendForm('contact_service', 'contact_form', form.current, 'gG8mWVwYo5nbbNy7d')
            .then((result) => {
                setMessage('Email sended')
                e.target.reset()
            }, (error) => {
                setMessage('Error: Email was not send')
        })
    }

    return <form className='Formular' ref={form} onSubmit={sendEmail}>
        <h1 className='Formular__tittle'>CONTACT</h1>

        <input className='Formular__input' type='text' name='user_name' placeholder=' Name'/>
        <input className='Formular__input' type='email' name='user_email' placeholder=' Email'/>
        <textarea className='Formular__text' name='message' placeholder=' Your message'/>
        <div className='Formular__footer'>
            <input className='Formular__button' type='submit' value='Send' />
            {message && <h2 className='Formular__info'>{message}</h2>}
        </div>
    </form>
} 

export default Formular