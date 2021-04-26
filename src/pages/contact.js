import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Contact = () => (
  <Layout>
    <Seo title="Contact page" />
    <div className="contact">
      <div className="formContainer">
        <form name="contactForm" method="POST" data-netlify-recaptcha="true" data-netlify="true">
          <input type="hidden" name="form-name" value="contactForm" />
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
            <button className="contactButton formContactButton" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </Layout>
);

export default Contact;
