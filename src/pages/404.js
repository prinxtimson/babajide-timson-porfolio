import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="d-flex flex-grow-1 justify-content-center align-items-center flex-column">
      <h1>404: Not Found</h1>
      <StaticImage
        src="../images/undraw_page_not_found.svg"
        layout="fullWidth"
        placeholder="tracedSVG"
        alt="404"
      />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
