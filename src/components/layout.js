/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="d-flex flex-column flex-grow-1">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="container d-flex flex-column flex-grow-1">
        <main className="d-flex flex-column flex-grow-1 justify-content-center">
          {children}
        </main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          <div className="row justify-content-around mb-2">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="d-flex flex-column align-items-center d-md-block">
                <span style={{ color: "#08fdd8" }}>Connect</span>
                <div className="d-flex">
                  <div className="me-4 d-flex align-items-center">
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#fd2155",
                        marginRight: 5,
                      }}
                    />
                    <FaGithub />
                  </div>
                  <div className="me-4 d-flex align-items-center">
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#fd2155",
                        marginRight: 5,
                      }}
                    />
                    <FaLinkedin />
                  </div>
                  <div className="me-4 d-flex align-items-center">
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#fd2155",
                        marginRight: 5,
                      }}
                    />
                    <FaTwitter />
                  </div>
                  <div className="me-4 d-flex align-items-center">
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#fd2155",
                        marginRight: 5,
                      }}
                    />
                    <FaFacebook />
                  </div>
                  <div className="me-4 d-flex align-items-center">
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#fd2155",
                        marginRight: 5,
                      }}
                    />
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center d-md-block">
                <span style={{ color: "#08fdd8" }}>Say hello</span>
                <p>
                  <a href="mailto:timson.babajide@gmail.com">
                    timson.babajide@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            © {new Date().getFullYear()}, Babajide Timson. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
