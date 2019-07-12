import { graphql } from "gatsby"
import React from "react"

export default ({ data }) => {
  return <div>{data.site.siteMetadata.description}</div>
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`