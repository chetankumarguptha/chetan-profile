import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({
    data:{
      allStrapiAbout:{nodes},
    },
  }) => {
  const {info,stack,image,title} = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="This is an about page"/>
        <section className="about-page">
          <div className="section-center about-center">
            <Image fluid={image.childImageSharp.fluid} className="about-img"></Image>
            <article className="about-text">
              <Title title={title} />
              <p>{info}</p>
              <div className="about-stack">
                {stack.map((item)=>{
                  return<span key={item.id}>{item.title}</span>
                })}
              </div>
            </article>
          </div>
        </section>
    </Layout>
    
  )
}


export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        info
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

export default About
