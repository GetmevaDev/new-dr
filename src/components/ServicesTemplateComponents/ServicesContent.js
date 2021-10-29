import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import ReactMarkdown from "react-markdown"
import Doctors from "./Doctors"

const ServicesContent = props => {
  console.log(props.content)
  return (
    <div className="service-content">
      {/* <img src={props.img.edges[0].node.Doctors[0].Photo[0].url} alt="" /> */}

      <ReactMarkdown
        source={props.content}
        transformImageUri={uri =>
          uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
        }
      />
      {/* <Doctors /> */}
    </div>
  )
}

export default ServicesContent
