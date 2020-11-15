import React, {useState, useRef} from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
import Doctors from "./Doctors"



const AdaptiveAccordionBlogs = (props) => {


  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);


  function toggleAccordion(){
    setActiveState(setActive === "" ? "active orange-color" : "");
    setHeightState(
      setActive === "active orange-color" ? "0px" : `${content.current.scrollHeight + 3000}px`
    )
  }

  // console.log(content.current.scrollHeight)

  return(
    <div className="card-service">
      <h2
        onClick={toggleAccordion}
        className={`title-service ${setActive}`}
      >
        {props.title}
      </h2>
      <div className={"content-service"}
           ref={content}
           style={{
             maxHeight: `${setHeight}`,
             opacity: '1',
           }}>
          <ReactMarkdown
            source={props.content}
            transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
          />
        <Doctors />
      </div>

    </div>
  )
}


export default AdaptiveAccordionBlogs