import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const NavigationArticles = () =>{

  const data = useStaticQuery(graphql`
    query NavigationArticlesQuery{
       allStrapiBlogArchives(limit: 7) {
        edges {
          node {
            Title
            Data
            id
            slug
          }
        }
      }
    }
  `)

  return(
    <aside>
      <h2 className="recent-posts__title">Recent Posts</h2>


      {
        data.allStrapiBlogArchives.edges.map(elem => (
          <div className="recent-posts__item">
            <h4 className="recent-posts__item-title">
              <a href={`/blog/${elem.node.slug}`}>{elem.node.Title}</a>
            </h4>
            <div className="recent-posts__item-date">{elem.node.Data}</div>
          </div>
        ))
      }


    </aside>
  )
}


export default NavigationArticles