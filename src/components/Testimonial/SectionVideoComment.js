import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const SectionVideoComment = () => {

  const data = useStaticQuery(graphql`
    query CommentVideoQuery{
        allStrapiTestimonials {
          edges {
            node {
              LinkVideo
            }
          }
        }
    }
  `)

  const commentVideoLink = data.allStrapiTestimonials.edges[0].node.LinkVideo || "";

  return(
    <section className="section-video-comment">
      <div className="block-video-commrnt">
        <iframe src={commentVideoLink} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </div>

    </section>
  )
}



export default SectionVideoComment