import { createElement, useRef } from "react";
import { content } from "./content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jx5du0s",
        "template_ig6h8p6",
        form.current,
        "RxHEzGpUmQDP5plWO"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <Toaster />
      <div className="contact-container">
        <h4 className="contact-title">{Contact.subtitle}</h4>
        <div className="contact-content">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="contact-input"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Id"
              required
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="contact-textarea"
            ></textarea>
            <button className="contact-button">Submit</button>
          </form>
          <div className="contact-social">
            {Contact.social_media.map((item, i) => (
              <div key={i} className="social-item">
                <span className="social-icon">{createElement(item.icon)}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;