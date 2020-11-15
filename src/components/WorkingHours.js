import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"




const WorkingHours = ()=> (
  <StaticQuery
  query={graphql`
  query WorkingQuery{
  allStrapiWorkingHours {
    edges {
      node {
        Day_And_Hours {
          Day
          Time
          id
        }
      }
    }
  }
  }
  `}
  render={data =>(
      <>
        <h3><span className="icon fa fa-history"></span> Working hours </h3>

        <ul>
          {data.allStrapiWorkingHours.edges[0].node.Day_And_Hours.map(item => (
            <li
            key={item.id}
            >{item.Day} {item.Time}</li>
          ))}
        </ul>
      </>
  )}
  />
)

export default WorkingHours