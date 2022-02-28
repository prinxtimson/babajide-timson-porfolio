import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa"
import slugify from "slugify"

import "../styles/index.css"

const query = graphql`
  {
    allContentfulProjects {
      nodes {
        id
      }
    }
  }
`

const ProjectCard = () => {
  const { allContentfulProjects } = useStaticQuery(query)
  const projects = allContentfulProjects.nodes

  return (
    <div className="d-flex flex-wrap align-items-center">
      {projects.map(project => {
        const { id, title, excerpt, featuredImage, tags, links } = project
        const pathToImage = getImage(featuredImage)
        const slug = slugify(title, { lower: true })

        return (
          <div
            key={id}
            className="card shadow bg-dark"
            style={{ width: "18rem" }}
          >
            <GatsbyImage
              image={pathToImage}
              alt={title}
              className="card-img-top"
            />
            <div className="card-body">
              <Link
                to={`/projects/${slug}`}
                className="text-white text-decoration-none"
              >
                <h2 className="card-title title">{title}</h2>
              </Link>

              <div className="">
                {tags.map((tag, index) => (
                  <span key={index} className="badge bg-secondary mx-1">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="card-text">{excerpt}</p>
            </div>
            <div className="card-footer text-muted">
              <div className="row justify-content-center align-items-center">
                <Link
                  to={`/projects/${slug}`}
                  className="col text-muted footer-text text-decoration-none"
                >
                  <FaLink /> Blog
                </Link>
                <Link
                  to={links.live}
                  className="col text-muted footer-text text-decoration-none"
                >
                  <FaExternalLinkAlt /> Live
                </Link>
                <Link
                  to={links.guthub}
                  className="col text-muted footer-text text-decoration-none"
                >
                  <FaGithub /> Github
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProjectCard
