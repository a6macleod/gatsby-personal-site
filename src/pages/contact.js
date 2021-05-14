import * as React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const ContactStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  label span {
    display: block;
  }
  input,
  textarea {
    width: 300px;
  }
  @media (max-width: 400px) {
    input,
    textarea {
      width: 250px;
    }
  }
`;

const Contact = () => (
  <Layout>
    <Seo title="Contact page" />
    <ContactStyles className="contact">
      <div className="formContainer">
        <form
          name="contactForm"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <p className="formInput">
            <label htmlFor="name">
              <span>Name</span>
              <input type="text" name="name" required />
            </label>
          </p>
          <p className="formInput">
            <label htmlFor="email">
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
          </p>
          <p className="formInput">
            <label htmlFor="message">
              <span>Message</span>
              <textarea name="message" required />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <div className="formContactButtonContainer">
            <button className="contactButton formContactButton primaryButton" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </ContactStyles>
  </Layout>
);

export default Contact;
