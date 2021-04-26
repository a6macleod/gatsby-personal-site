import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle} <span>Web Developer</span>
        </Link>
      </h1>
    </div>
    <navigation>
      <ul>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </navigation>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
