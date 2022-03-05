import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const ProjectTemplate = ({ data }) => {
  const {
    name,
    description: { description },
    featuredImage,
    details: { tags, links, duration },
    images,
  } = data.contentfulProjects

  const pathToImage = getImage(featuredImage)

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize)
      res.push(chunk)
    }
    return res
  }

  const arrImages = sliceIntoChunks(images, 3)

  return (
    <Layout>
      <div>
        <h1>
          {name}{" "}
          <span className="fs-3">: A Robotics Process Automation System</span>
        </h1>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <GatsbyImage image={pathToImage} alt={name} className="rounded" />
          </div>
          <div className="col-lg-4">
            <div className="my-4">
              <h4 className="mb-1">Tags</h4>
              <div className="">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge m-1"
                    style={{ backgroundColor: "#fd2155" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="my-4">
              <h4 className="mb-1">Links</h4>
              <div className="">
                <Link
                  to={links.live}
                  className=" text-muted text-decoration-none"
                >
                  <FaExternalLinkAlt /> Live
                </Link>
                <Link
                  to={links.github}
                  className="mx-4 text-muted text-decoration-none"
                >
                  <FaGithub /> Github
                </Link>
              </div>
            </div>
            <div className="my-4">
              <h4 className="mb-1">Development Duration</h4>
              <p>{duration} weeks</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h3>Description</h3>
          <p className="text-muted">{description}</p>
        </div>
        <div className="">
          <SimpleReactLightbox>
            <SRLWrapper>
              <div className="d-flex flex-wrap">
                {arrImages.map((chunk, index) => (
                  <div className="col-12 col-md-6 col-lg-4 px-2" key={index}>
                    {chunk.map(image => {
                      const {
                        id,
                        file: { url },
                      } = image
                      const pathToImg = getImage(image)
                      return (
                        <div className="mt-3" key={id}>
                          <a href={url}>
                            <GatsbyImage
                              image={pathToImg}
                              alt={name}
                              className="rounded"
                            />
                          </a>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProject($name: String) {
    contentfulProjects(name: { eq: $name }) {
      id
      name
      description {
        description
      }
      featuredImage {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
      details {
        tags
        links {
          github
          live
        }
      }
      images {
        id
        title
        file {
          url
        }
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`

export default ProjectTemplate
