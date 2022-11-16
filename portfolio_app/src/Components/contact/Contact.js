import React, { useRef } from 'react';
import './Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkIcon from '@mui/icons-material/Work';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  function onSend(e){
    emailjs.sendForm('service_spsih6r', 'template_reqlvbx', form.current, 'RcVPVKDEUEWdovv5F')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  }
  return (

    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <EmailIcon></EmailIcon>
            <h4>Email</h4>
            <h5>gopal190198@gmail.com</h5>
            <a href="mailto:gopal190198@gmail.com" target='_blank'>Send Message</a>
          </article>
          <article className='contact__option'>
            <WhatsAppIcon></WhatsAppIcon>
            <h4>WhatsApp</h4>
            <h5>+917488157068</h5>
            <a href='https://wa.me/917488157068' target='_blank'>Send Message</a>
          </article>
          <article className='contact__option'>
            <WorkIcon></WorkIcon>
            <h4>Naukri</h4>
            <h5></h5>
            <a href='https://wa.me/917488157068' target='_blank'>Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={onSend} className='contact__form'>
          <input name="user_name" placeholder='Your Full Name' required></input>
          <input name="user_email" placeholder='Your Email' required></input>
          <textarea name="message" rows="7" cols="50" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact