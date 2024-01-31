import ContactData from "./ContactData";
import ContactForm from "./ContactForm";
import ContactProfile from "./ContactProfile";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container">
      <h1>Pongámonos en contacto :)</h1>
      <section className="contact">
        <div className="contact__container">
          <ContactData />
          <ContactProfile />
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
