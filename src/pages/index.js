import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/index.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="row justify-content-center align-items-center flex-grow-1">
      <div className="col-lg my-5">
        <h1 className="mb-1" style={{ fontSize: "5.5rem" }}>
          <span>Hello,</span>
          <br />
          <span>I'm Jide</span>
        </h1>
        <h2 style={{ color: "#08fdd8" }}>Web and Software Developer</h2>
        <p className="text-muted">
          Experineced Backend and Frontend Developer, and WordPress Expert.
          Excellent in Javascript, PHP languages and their frameworks.
        </p>
      </div>
      <div className="col-lg">
        <StaticImage
          src="../images/undraw_programming.svg"
          layout="fullWidth"
          alt="A Programmer Illustration"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
