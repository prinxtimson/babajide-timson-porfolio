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
      <div className="d-flex flex-column flex-grow-1">
        <main className="container d-flex flex-column flex-grow-1 justify-content-center">
          {children}
        </main>
        <footer className="container-fluid border-top pt-3">
          <div className="row align-items-center justify-content-around mb-2">
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
                    <a
                      href="https://github.com/prinxtimson"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub color="white" />
                    </a>
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
                    <a
                      href="https://www.linkedin.com/in/jide-timson-3280b0ba/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin color="white" />
                    </a>
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
                    <a
                      href="https://twitter.com/BJ_Timson"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter color="white" />
                    </a>
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
                    <a
                      href="https://www.facebook.com/KooSooShee"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook color="white" />
                    </a>
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
                    <a
                      href="https://www.instagram.com/ioluwatimmie/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center d-md-block">
                <span style={{ color: "#08fdd8" }}>Say hello</span>
                <p className="mb-0">
                  <a
                    href="mailto:timson.babajide@gmail.com"
                    //style={{ color: "#fd2155" }}
                  >
                    timson.babajide@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <p style={{ fontSize: 14 }}>
              © {new Date().getFullYear()}, <a href="/">Babajide Timson.</a> All
              rights reserved.
            </p>
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
