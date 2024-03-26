import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'

const Contact = ()=>{

    return(
            <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:examplemail@gmail.com">agostinaromontamat@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/agossromero/" target='_blank'>LinkedIn</a></p>
        </div>
      </div>
    </section>
    )
    }
    
    
    export default Contact;