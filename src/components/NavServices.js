import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const NavServices = () => {

  const data = useStaticQuery(graphql`
     query NavServicesQuery{
      NameCategory:  allStrapiCategorys {
              edges {
                node {
                  NmaeCategory
                 
                }
              }
            }
            NameCategory: allStrapiCategorys {
                edges {
                  node {
                    NmaeCategory
                    services {
                      Title
                      id
                    }
                  }
                }
              }
        secondBlock: allStrapiServices(filter: {category: {NmaeCategory: {eq: "Core Dentistry"}}}) {
          edges {
            node {
              id
              Title
              slug
            }
          }
        }
        thirdBlock: allStrapiServices(filter: {category: {NmaeCategory: {eq: "Preventative Dentistry"}}}) {
          edges {
            node {
              id
              Title
              slug
            }
          }
        }
        fourthBlock: allStrapiServices(filter: {category: {NmaeCategory: {eq: "Cosmetic Dentistry"}}}) {
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


console.log(data?.NameCategory.edges[1].node.services)

  return(

    <li className="containers_sub-menu padding order_8 row">
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data?.NameCategory?.edges[0]?.node?.NmaeCategory || null}</h3>
        <ul>
          {
           data?.NameCategory.edges[0].node.services.map(item => (
              <li key={item?.id || null}>
                {console.log(item)}
                <a
                  href={`/services/${item?.node?.slug}`}
                  className="link_sub-menu">
                  {item?.Title || null}
                </a>
              </li>
            ))
          } 
      
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data?.NameCategory?.edges[1]?.node?.NmaeCategory}</h3>
        <ul>
          {
           data?.NameCategory.edges[1].node.services.map(item => (
              <li key={item?.id || null}>
                {console.log(item)}
                <a
                  href={`/services/${item?.node?.slug}`}
                  className="link_sub-menu">
                  {item?.Title || null}
                </a>
              </li>
            ))
          } 
      
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data?.NameCategory?.edges[2]?.node?.NmaeCategory}</h3>
        <ul>
        {
           data?.NameCategory?.edges[2]?.node?.services?.map(item => (
              <li key={item?.id || null}>
                {console.log(item)}
                <a
                  href={`/services/${item?.node?.slug}`}
                  className="link_sub-menu">
                  {item?.Title || null}
                </a>
              </li>
            ))
          } 
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data?.NameCategory?.edges[3]?.node?.NmaeCategory}</h3>
        <ul>
        {
           data?.NameCategory?.edges[3]?.node?.services?.map(item => (
              <li key={item?.id || null}>
                {console.log(item)}
                <a
                  href={`/services/${item?.node?.slug}`}
                  className="link_sub-menu">
                  {item?.Title || null}
                </a>
              </li>
            ))
          } 
        </ul>
      </div>
    </li>
    )
}




export default NavServices













// import React from "react"
// import {graphql, useStaticQuery} from "gatsby"


// const NavServices = () => {

//   const data = useStaticQuery(graphql`
//      query NavServicesQuery{
//         allStrapiServices {
//           edges {
//             node {
//               id
//               Title
//               slug
//             }
//           }
//         }
//      }
//   `)




//   return(

//     <div className="containers_sub-menu padding order_8 row">
//       <div className="container_sub-menu">
      
//         <ul>
//           {
//             data.allStrapiServices.edges.map(item => (
//               <li key={item?.node?.id || null}>
//                 <a
//                   href={`/services/${item?.node?.slug}`}
//                   className="link_sub-menu">
//                   {item?.node?.Title || null}
//                 </a>
//               </li>
//             ))
//           } 
   
//         </ul>
//       </div>
//     </div>
//     )
// }




// export default NavServices