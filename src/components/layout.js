import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import './layout.css';
import GlobalStyles from '../styles/GlobalStyles';

const LayoutStles = styled.div`
  position: relative;
  min-height: calc(100vh - 150px);
  overflow: hidden;
  padding-bottom: 100px;
`;

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 42%;
  padding-bottom: 40px;
  @media (max-width: 1080px) {
    left: 40%;
  }
  @media (max-width: 900px) {
    left: 38%;
  }
  @media (max-width: 700px) {
    left: 35%;
  }
  @media (max-width: 500px) {
    left: 30%;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allProjectDataJson {
        edges {
          node {
            title
            goal
            link
            tech
            code
            id
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <LayoutStles>
        <main>
          {children}
          <FooterStyles>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://github.com/a6macleod">Andrew</a>
          </FooterStyles>
        </main>
      </LayoutStles>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
