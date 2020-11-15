import React, { useState } from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
import Doctors from "./Doctors"



const ServicesContent = (props)=> {



  return(
    <div className="service-content">
      <ReactMarkdown
      source={props.content}
      transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
      />
      <Doctors />
    </div>
  )
}




export default ServicesContent