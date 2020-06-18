import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

 const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`


const SEO = ({title, description}) => {

  const {site} = useStaticQuery(query);
  const {siteDesc,siteTitle,siteUrl,image,author,twitterUsername} =site.siteMetadata

  return <Helmet title={`${title} |${siteTitle}`}  htmlAttributes={{lang:"en"}}>
    <meta  name="description " content={description || siteDesc}  />
    <link rel="icon" type="image/png" href="../assetsfavicon.png" sizes="16x16" />

    <meta name="image" content={image} />
    {/* twitter card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={twitterUsername} />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDesc} />
    <meta name="twitter:image" content={`${siteUrl} ${image}`} />    
  </Helmet>
}



export default SEO
