import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutMePage = () => (
  <Layout>
    <Seo title="About me" />
    <div className="row align-items-center mt-5">
      <div className="col-lg-6">
        <StaticImage
          src="../images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
          placeholder="tracedSVG"
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <div className="col-lg-6">
        <h1 style={{ color: "#08fdd8" }}>About me</h1>
        <p className="lh-lg">
          Hi, my name is Babajide Timson, and I am a FullStack Developer and
          Mobile App Developer with over 4 years of commercial experiences
          working on verse verieties of projects.
        </p>
        <p className="lh-lg">
          I am a hard working, problem solver and self motivated person who love
          taking on new challenges, never before worked on type of project. I
          also enjoy learning new things and build interesting new things.
        </p>
      </div>
    </div>
    <div className="mb-5">
      <p className="lh-lg">
        I have worked with different frameworks like React, Angular, React
        Native, NodeJs and Laravel. I have also different CMS platforms like
        Wordpress, Big Commerce and Shopify depending on the project
        specifications.{" "}
      </p>
      <p>
        Currently, I work as a Remote Senior Developer with{" "}
        <Link to="https://tritekconslting.co.uk">Tritek Consulting Ltd</Link>, a
        UK base company.
      </p>
    </div>
  </Layout>
)

export default AboutMePage
