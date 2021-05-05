import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import './layout.css';
import GlobalStyles from '../styles/GlobalStyles';

const LayoutStles = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 1000px;
`;

const FooterStyles = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 45%;
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
        <main>{children}</main>
        <FooterStyles>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://github.com/a6macleod">Andrew</a>
        </FooterStyles>
      </LayoutStles>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
