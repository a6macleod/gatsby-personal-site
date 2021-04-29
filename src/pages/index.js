import * as React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Projects from '../components/projects';

const HomeStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  gap: 40px;
  .contact-me {
    display: inline-block;
    background-color: hsl(215, 90%, 65%);
    margin: 0 auto;
    padding: 5px 10px;
    border-radius: 5px;
    a {
      color: #fff;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeStyles>
      <StaticImage
        src="../images/circle-headshot-2020.png"
        width={300}
        quality={95}
        formats={['AUTO', 'WEBP', 'AVIF']}
        alt="Andrew MacLeod"
      />
      <div className="about">
        <p>I am Andrew MacLeod.</p>
        <p>I'm here to build blazing fast websites for you!</p>
        <p>I'm a front-end developer from Kalamazoo Michigan.</p>
        <div className="contact-me">
          <Link to="/contact">Contact Me!</Link>
        </div>
      </div>
    </HomeStyles>
    {/* Project showcase below */}
    <Projects />
  </Layout>
);

export default IndexPage;
