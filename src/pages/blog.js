import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"
// ...GatsbyImageSharpFluid

const Blog = ({
    data:{
      allStrapiBlogs:{nodes:blogs}
    }
  }) => {
  return <Layout>
    <SEO title="Blog" description="This is an blog page"/>
    <section className="blog-page">
        <Blogs blogs={blogs} title=" all blogs  pages" />
    </section>
  </Layout>
}



export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        desc
        date(formatString: "DD,MMM,YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`



export default Blog
