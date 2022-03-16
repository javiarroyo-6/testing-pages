import React, { useState } from "react";
import { FiHome, FiPhone } from "react-icons/fi";
import Footer from "../components/Footer.js";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [values, setValues] = useState({
    fullName: "",
    businessName: "",
    email: "",
    message: "",
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

  const handleMessageInputChange = (event) => {
    setValues({ ...values, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.fullName && values.businessName && values.email) {
      setValid(true);
    }

    emailjs
      .sendForm(
        "service_do8gytg",
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
    <>
      <div className="flexbox-container">
        <div className="flexbox-item flexbox-item-1">
          <h1 style={{ paddingTop: 75, color: "#0047ab" }}>Contact Us</h1>
          <h2 style={{ marginLeft: 10, paddingTop: 30 }}>
            Our team would love to hear from you!
          </h2>
          <p style={{ marginLeft: 10 }}>
            Please fill out the contact form below and noe of our team members
            will get back to you as quickly as possible.
          </p>
          <div className="form-container" style={{ marginTop: 10 }}>
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
                <span id="business-name-error">
                  Please enter a business name.
                </span>
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
              <label>Message:</label>
              <textarea
                rows={10}
                cols={30}
                id="message"
                name="message"
                placeholder="Your message..."
                onChange={handleMessageInputChange}
              />
              <button className="form-field" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
        <div className="flexbox-item flexbox-item-2">
          <h1 style={{ paddingTop: 75, color: "#0047ab" }}>
            Information Center
          </h1>
          <div className="information-container">
            <p>
              <FiHome color="#0047ab" />
              Address: 1151 Pomona Road, Suite H, Corona,CA 92882
            </p>
            <p>
              <FiPhone color="#0047ab" />
              Phone: (951)-733-5283
            </p>

            <h3 style={{ paddingTop: 25, color: "#0047ab" }}>RFQ?</h3>
            <p>Request for a quote.</p>
            <a href="mailto:AR@Diversified-af.com">AR@Diversified-af.com</a>
            <h3 style={{ paddingTop: 25, color: "#0047ab" }}>KEY STAFF</h3>

            <h3>Luke Cortes</h3>
            <p>President</p>
            <a href="mailto:LCortes@Diversified-AF.com">
              LCortes@Diversified-AF.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
