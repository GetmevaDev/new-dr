import React from "react"
import ReactMarkdown from "react-markdown"



const AccordionCard = ({ title, answer, active, setActive }) =>{

  return(

    <div className="ac card-accordion">
      <h2
        onClick={() => setActive(title)}
        className={`ac-q ${active === title ? "orange" : ""}`}
        id="tab"
      > <span className={`plus ${active === title ? "minus" : ""}`}></span>
        {title}</h2>
      <div className={(active === title ? "show" : "") + " ac-a"}>
        <p>
          <ReactMarkdown
          source={answer}
          />
          </p>
      </div>
    </div>
  )
}


export default AccordionCard