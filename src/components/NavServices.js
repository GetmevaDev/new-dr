import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const NavServices = () => {

  const data = useStaticQuery(graphql`
     query NavServicesQuery{
        allStrapiServices {
          edges {
            node {
              id
              Title
              slug
            }
          }
        }
     }
  `)




  return(

    <div className="containers_sub-menu padding order_8 row">
      <div className="container_sub-menu">
      
        <ul>
          {
            data.allStrapiServices.edges.map(item => (
              <li key={item?.node?.id || null}>
                <a
                  href={`/services/${item?.node?.slug}`}
                  className="link_sub-menu">
                  {item?.node?.Title || null}
                </a>
              </li>
            ))
          } 
   
        </ul>
      </div>
    </div>
    )
}




export default NavServices