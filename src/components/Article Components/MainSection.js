import React from "react"

import ContentComponent from "./ContentComponent"
import NavigationArticles from "./NavigationArticles"



const MainSection = (props) => {

  return(
    <section className=" section-article">
      <div className="container row">
    <ContentComponent
      dataArticle={props.articleData}
      contentArticle={props.content}
    />
    <NavigationArticles />
      </div>
    </section>
  )
}


export default MainSection