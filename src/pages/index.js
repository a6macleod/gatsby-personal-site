import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Projects from '../components/projects';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <StaticImage
      src="../images/circle-headshot-2020.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Andrew MacLeod"
    />
    <p>I am Andrew MacLeod.</p>
    <p>I'm here to build blazing fast websites for you!</p>
    <p>I'm a front-end developer from Kalamazoo Michigan.</p>
    <div className="contact-button">
      <Link to="/contact">Contact Me!</Link>
    </div>
    <Projects />
  </Layout>
);

export default IndexPage;
