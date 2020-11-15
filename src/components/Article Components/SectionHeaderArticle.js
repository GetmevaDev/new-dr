import React from "react"
import BackgroundImage from "gatsby-background-image"


const SectionHeaderArticle = (props) => {

  return(

    <section
      className="section-header_pages bg_style"
    style={{
      background: `#c57916 url(${props.background}) no-repeat center`,
      backgroundSize: 'cover',

    }}
    >
      <div className="overlay_article"></div>
      <h2>{props.title}</h2>
      <a href={`/blog`}>← Back to Articles</a>
    </section>

  )
}

export default SectionHeaderArticle