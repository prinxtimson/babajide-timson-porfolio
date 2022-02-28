import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/index.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <h2 style={{ margin: 0 }} className="navbar-brand">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 align-items-center">
            <li className="nav-item mb-0">
              <Link className="nav-link" activeClassName="active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/about-me"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item mb-0">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/projects"
              >
                Projects
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center ms-4">
            <Link
              className="btn text-white"
              style={{ backgroundColor: "#fd2155" }}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
