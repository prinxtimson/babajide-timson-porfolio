import * as React from "react"
import { Link, graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ProjectCard from "../../components/projectCard"
import "../../styles/index.css"

const ProjectPage = ({ data }) => {
  const { nodes } = data.allContentfulProjects

  return (
    <Layout>
      <Seo title="Projects" />
      <div className="my-5 row align-items-center">
        <div className="col-lg-8">
          <h1 style={{ color: "#08fdd8" }}>Projects</h1>
          <p className="lh-lg">
            While working as a freelancer and currently as a Senior Remote
            Developer for{" "}
            <Link to="https://tritekconslting.co.uk">
              Tritek Consulting Ltd
            </Link>
            , I have worked on several types projects (e.g RPA Web App, Project
            Management Web App, Custom WordPress Plugin e.t.c) with different
            technology ranging from a CMS platform like WordPress, Shopify and
            Big Commerce to using frameworks like ReactJs, React Native,
            Laravel, AngularJs, Firebase, GatsbyJs and Nodejs.{" "}
          </p>

          <p>View some of my selected projects below.</p>
        </div>
        <div className="col-lg-4 d-none d-lg-block"></div>
      </div>
      <div className="mb-5">
        <div className="mb-5">
          <h2 className="text-center mb-3">Selected Projects</h2>
          <div className="horizontal-line" />
        </div>

        <div className="">
          <ProjectCard projects={nodes} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        id
        name
        featuredImage {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: CONSTRAINED
            height: 180
          )
        }
        excerpt
        details {
          tags
          links {
            github
            live
          }
        }
      }
    }
  }
`

export default ProjectPage
