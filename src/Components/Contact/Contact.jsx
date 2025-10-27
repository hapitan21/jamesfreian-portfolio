import React, { useState, useRef } from "react";
import { VscMail } from "react-icons/vsc";
import { AiOutlineInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  // EmailJS credentials (replace with your own from EmailJS dashboard)
  const serviceId = 'james112504';  // Service ID
  const templateId = 'template_raqestf'; // Template ID
  const publicKey = '3GhUCylGwpDYshLjO'; // Public Key

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <VscMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>jamesfreian70@gmail.com</h5>
            <a href="mailto:jamesfreian70@gmail.com">Click Here</a>
          </article>
          {/* ======================================== */}

          <a href="https://www.instagram.com/freeyiannn/" target="_blank" rel="noopener noreferrer" className="contact_option instagram">
            <AiOutlineInstagram className="contact_option-icon" />
            <h4>Instagram</h4>
            <h5>@freeyiannn</h5>
            <span>Click Here</span>
          </a>
        </div>
        {/* ===============END OF CONTACT INFO================== */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Id"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {success && ( 
            <p style={{ color: "#00ff00" }}>Message Sent Successfully</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
