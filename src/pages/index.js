import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';

const homeStyles = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    /* space between header & main */
    padding-bottom: 50px;
  }

  .titleContainer {
    text-align: center;
    font-family: 'Raleway';
    font-weight: 700;
  }

  .titleContainer h1 {
    font-size: 25px;
  }

  .titleContainer,
  .header nav {
    padding-top: 30px;
    padding-left: 30px;
    padding-bottom: 30px;
  }

  .header nav {
    padding-right: 100px;
  }

  .header .active {
    border-bottom: solid 1px hsl(215, 90%, 65%);
  }
`;

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
  </Layout>
);

export default IndexPage;
