import useMail from "@/hooks/useMail"

export default function ContactForm() {
  let {handleMail, handleBlur, handleSubmit} = useMail()

  return (      
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <label htmlFor="subject">Asunto:</label>
        <input type="text" id="subject" name="subject" autoComplete="off" onBlur={handleBlur} required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" onBlur={handleBlur} required />
      </div>
      
      <button type="submit" onClick={handleMail}>Enviar email</button>
    </form>  
  )
}