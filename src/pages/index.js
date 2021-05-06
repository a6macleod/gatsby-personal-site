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
  @media (max-width: 1000px) {
    font-size: 0.9rem;
    gap: 30px;
    padding-top: 30px;
    img {
      width: 250px;
    }
  }
  @media (max-width: 800px) {
    font-size: 0.8rem;
    gap: 15px;
    padding-top: 0;
    img {
      width: 200px;
    }
    p {
      margin-bottom: 10px;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    font-size: 0.8rem;
    gap: 10px;
    img {
      width: 200px;
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
        <div className="primaryButton">
          <Link to="/contact">Contact Me!</Link>
        </div>
      </div>
    </HomeStyles>
    {/* Project showcase below */}
    <Projects />
  </Layout>
);

export default IndexPage;
