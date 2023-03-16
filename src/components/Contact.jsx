import "./Contact.css"
import ContactForm from "./ContactForm";
import emailLight from "../Assets/email-light.png"
import emailDark from "../Assets/email-dark.png"
import locationLight from "../Assets/location-light.png"
import locationDark from "../Assets/location-dark.png"
import phoneLight from "../Assets/phone-light.png"
import phoneDark from "../Assets/phone-dark.png"
import ContactProfile from "./ContactProfile";
// import { useState } from "react";

export default function Contact({ mode }) {
  let handleMail = () => {
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')

    if (subject.value === "" || message.value === "") {
      if (subject.value === "") subject.classList.add('error')
      if (message.value === "") message.classList.add('error')
    } else {
      subject.classList.remove('error')
      message.classList.remove('error')
      window.location.href = `mailto:tomashojnadel@gmail.com?subject=${subject.value}&body=${message.value}`
    }  
  }

  return (
    <div className="container">
      <h1>Pongámonos en contacto :)</h1>
      <section className="contact">
        <div className="contact__container">

          <section className="data">
            <img src={mode === 'light' ? emailLight : emailDark} alt="email" />
            <p onClick={handleMail}>tomashojnadel@gmail.com</p>
            
            <img src={mode === 'light' ? phoneLight : phoneDark} alt="teléfono" />
            <a href="https://api.whatsapp.com/send?phone=5493541317326" target="_blank">+54 9 3541-317326</a>
            
            <img src={mode === 'light' ? locationLight : locationDark} alt="ubicación" />
            <a target="_blank" href="https://www.google.com.ar/maps/place/Villa+Carlos+Paz,+C%C3%B3rdoba/@-31.4121939,-64.5697769,12z/data=!3m1!4b1!4m6!3m5!1s0x942d6640d6777c71:0x75c24ab6cb121bed!8m2!3d-31.4207828!4d-64.4992141!16zL20vMGNoc3Bt">
              <p>Villa Carlos Paz, Córdoba, Argentina</p>
            </a>
            
          </section>
          
          <ContactProfile />
        </div>
        
        <ContactForm handleMail={handleMail} />
      </section>
    </div>
  )
}