import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Projects = ({ children }) => (
  /* const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
*/
  <>
    <StaticImage
      src="../images/circle-headshot-2020.png"
      width={300}
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Andrew MacLeod"
    />
    <div>
      <p>the words</p>
    </div>
  </>
);
export default Projects;
