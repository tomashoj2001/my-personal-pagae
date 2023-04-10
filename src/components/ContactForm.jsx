// import { useEffect, useState } from "react"

export default function ContactForm({ handleMail }) {
  // let [asunto, setAsunto] = useState("")
  // let [mensaje, setMensaje] = useState("")

  // useEffect(() => {
  //   setMail(`mailto:tomashojnadel@gmail.com?subject=${asunto}&body=${mensaje}`)
  // }, [asunto, mensaje])

  let handleSubmit = (e) => {
    e.preventDefault()
    handleMail()
  }

  let handleBlur = (e) => {
    if (e.target.value === "") e.target.classList.add('error')
    else e.target.classList.remove('error')
  }

  return (      
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form__container">
        <label htmlFor="subject">Asunto:</label>
        {/* <input type="text" id="subject" name="subject" autoComplete="off" placeholder="Hola Mundo" onChange={(e) => setAsunto(e.target.value)} required /> */}
        <input type="text" id="subject" name="subject" autoComplete="off" onBlur={(e) => handleBlur(e)} required />

        <label htmlFor="message">Mensaje:</label>
        {/* <textarea id="message" name="message" onChange={(e) => setMensaje(e.target.value)} required /> */}
        <textarea id="message" name="message" onBlur={(e) => handleBlur(e)} required />
      </div>
      
      <button type="submit" onClick={handleMail}>Enviar email</button>
    </form>  
  )
}