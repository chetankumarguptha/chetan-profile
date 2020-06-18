import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({github,stack,image, index, description,title,  url, }) => {
  return <article className="project"> 
        {
          image &&(
          <Image fluid={image.childImageSharp.fluid} className="project-img"></Image>

          )}
      <div className="project-info">
          <span className="project">0{index + 1}.</span>
          <h3 className="project-title">{title || "detault title"}</h3>
          <p className="project-desc">
            {description}
          </p>
          <div className="project-stack">
            {stack.map((item)=>{
                  return <span key={item.id}>{item.title}</span>
            })}
          </div>
          <div className="project-links">
              <a href={github} >
                <FaGithubSquare  className="project-icon"/>
              </a>
              <a href={url} >
                <FaShareSquare  className="project-icon"/>
              </a>
          </div>
      </div>
    </article>
}

Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired,
  image:PropTypes.object.isRequired,

}

export default Project
