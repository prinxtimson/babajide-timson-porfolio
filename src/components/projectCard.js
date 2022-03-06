import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt, FaLink } from "react-icons/fa"
import slugify from "slugify"

import "../styles/index.css"

const ProjectCard = ({ projects = [] }) => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {projects.map(project => {
        const {
          id,
          name,
          excerpt,
          featuredImage,
          details: { tags, links },
        } = project
        const pathToImage = getImage(featuredImage)
        const slug = slugify(name, { lower: true })

        return (
          <div
            key={id}
            className="card shadow bg-dark m-3"
            style={{ width: "18rem" }}
          >
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="card-img-top"
            />
            <div className="card-body">
              <Link
                to={`/projects/${slug}`}
                className="text-white text-decoration-none"
              >
                <h2 className="card-title title">{name}</h2>
              </Link>

              <div className="">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge mx-1"
                    style={{ backgroundColor: "#fd2155", fontSize: 12 }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="card-text fs-6 mt-4">{excerpt}</p>
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
                  to={links.github}
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
