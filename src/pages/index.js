import * as React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Projects from '../components/projects'

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
`

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
        <p>I'm from Kalamazoo Michigan.</p>
        <p>I interested in being a web developer or a software developer.</p>
        <p>Send me a message to get in touch!</p>
        <div className="primaryButton">
          <Link to="/contact">Contact Me!</Link>
        </div>
      </div>
    </HomeStyles>
    {/* Project showcase below */}
    <Projects />
  </Layout>
)

export default IndexPage
