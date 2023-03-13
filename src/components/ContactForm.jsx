import { useEffect, useState } from "react"

export default function ContactForm({ setMail }) {
  let [asunto, setAsunto] = useState("")
  let [mensaje, setMensaje] = useState("")

  useEffect(() => {
    setMail(`mailto:tomashojnadel@gmail.com?subject=${asunto}&body=${mensaje}`)
  }, [asunto, mensaje])

  let handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:tomashojnadel@gmail.com?subject=${asunto}&body=${mensaje}`
  }

  return (      
     <form onSubmit={(e) => handleSubmit(e)}>
       <div className="form__container">
         <label htmlFor="subject">Asunto:</label>
         <input type="text" id="subject" name="subject" autoComplete="off" placeholder="Hola Mundo" onChange={(e) => setAsunto(e.target.value)} required />

         <label htmlFor="message">Mensaje:</label>
         <textarea id="message" name="message" onChange={(e) => setMensaje(e.target.value)} required />
       </div>
       
       <button type="submit">Enviar email</button>
     </form>  
  )
}