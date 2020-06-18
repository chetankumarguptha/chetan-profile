import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query =graphql`
{
  file(relativePath: {eq: "profile-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file:{
     childImageSharp: {fluid},
    },
  } = useStaticQuery(query);
  // console.log(data)
  return (
    <header className="hero">
      <div className="section-center hero-center">
          <article className="hero-info">
            <div>
              <div className="underline"> </div>
                <h1 className="name">i'm chetan </h1>
                <h1 className="name">kumar guptha</h1>
                <h4>freelance web and mobile UI/UX Designer</h4>
                <Link to='/contact' className="btn">
                  contact me
                </Link>
                <SocialLinks />
              </div>
          </article>
          <Image fluid={fluid} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
