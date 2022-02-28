import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectTemplate = ({ data }) => {
  const {} = data.contentfulProjects
  return (
    <div>
      <h4>project template</h4>
    </div>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    contentfulProjects(title: { eq: $title }) {
      title
    }
  }
`

export default ProjectTemplate
