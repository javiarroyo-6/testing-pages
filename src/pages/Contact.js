import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    businessName: "",
    email: "",
  });

  const [valid, setValid] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleFullNameInputChange = (event) => {
    setValues({ ...values, fullName: event.target.value });
  };

  const handleBusinessNameInputChange = (event) => {
    setValues({ ...values, businessName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName && values.businessName && values.email) {
      setValid(true);
    }

    emailjs
      .sendForm(
        "service_u935tom",
        "template_w05sjlh",
        event.target,
        "1WFe7jRgMJERnt5BF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div class="success-message">
            Success! Thank you for your interest.
          </div>
        ) : null}
        <input
          onChange={handleFullNameInputChange}
          value={values.fullName}
          id="full-name"
          className="form-field"
          type="text"
          placeholder="Full Name"
          name="fullName"
        />
        {submitted && !values.fullName ? (
          <span id="full-name-error">Please enter a full name.</span>
        ) : null}
        <input
          onChange={handleBusinessNameInputChange}
          value={values.businessName}
          id="business-name"
          className="form-field"
          type="text"
          placeholder="Business name"
          name="businessName"
        />

        {submitted && !values.businessName ? (
          <span id="business-name-error">Please enter a business name.</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          value={values.email}
          id="email"
          className="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span id="email-error">Please enter an email address.</span>
        ) : null}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Contact;

// lcortes@diversified-af.com
