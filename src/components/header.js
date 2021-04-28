import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px 60px;

  span {
    display: block;
    text-align: center;
  }

  nav {
    [aria-current]:not([aria-current='false']) {
      border-bottom: solid 1px hsl(215, 90%, 65%);
    }
    li {
      display: inline;
      list-style: none;
    }
    li:first-child {
      margin-right: 20px;
    }
  }

  a {
    color: hsl(0, 20%, 15%);
  }

  li a:hover {
    color: hsl(215, 90%, 65%);
  }

  @media (max-width: 650px) {
    margin: 20px 20px;
    h1 {
      font-size: 1.5rem;
    }
    nav {
      font-size: 1rem;
    }
  }

  @media (max-width: 430px) {
    nav {
      li:first-child {
        margin-right: 10px;
      }
    }
    span {
      text-align: left;
    }
  }
`;

export default function Header({ siteTitle }) {
  return (
    <HeaderStyles>
      <h1>
        <Link to="/">
          {siteTitle} <span>Web Developer</span>
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
