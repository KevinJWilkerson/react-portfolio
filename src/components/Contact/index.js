import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("A valid email is required.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required to submit a message.`);
      } else {
        setErrorMessage("");
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log("Form", formState);
  }

  return (
    <section id="contact" className="page-content">
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className="section-content">
        <div className="form-container">
          <form id="contact-form" name="contact_form" onSubmit={handleSubmit}>
            <div className="form-entry">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                defaultValue={email}
                onBlur={handleChange}
                name="email"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="5"
                placeholder="Your Message"
              />
            </div>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <button data-testid="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
