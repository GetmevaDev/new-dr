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
        firstBlock: allStrapiServices(filter: {category: {NmaeCategory: {eq: "For Patients"}}}) {
          edges {
            node {
              id
              Title
              slug
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




  return(

    <li className="containers_sub-menu padding order_8 row">
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data.NameCategory.edges[0].node.NmaeCategory || null}</h3>
        <ul>
          {
            data.firstBlock.edges.map(item => (
              <li key={item.node.id || null}>
                <a
                  href={`/services/${item.node.slug}`}
                  className="link_sub-menu">
                  {item.node.Title || null}
                </a>
              </li>
            ))
          }
          {/*<li><a href="/pages/services-template.html" className="link_sub-menu"> Your First Visit</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu"> Financial and Insurance Information</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu"> Choosing a Dentist</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu"> Financial Policy</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu"> Home Care Instructions</a></li>*/}
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data.NameCategory.edges[1].node.NmaeCategory}</h3>
        <ul>
          {
            data.secondBlock.edges.map(item => (
              <li key={item.node.id || null}><a href={`/services/${item.node.slug}`} className="link_sub-menu">{item.node.Title}</a></li>
            ))
          }
          {/*<li><a href="#" className="link_sub-menu">Bridges and Dentures</a></li>
          <li><a href="#" className="link_sub-menu">Dental Implants and Implant Crowns</a></li>
          <li><a href="#" className="link_sub-menu"> Socket Preservation</a></li>
          <li><a href="#" className="link_sub-menu"> Tooth Extraction</a></li>
          <li><a href="#" className="link_sub-menu">Root Canal</a></li>
          <li><a href="#" className="link_sub-menu">BPA FREE Dental Fillings</a></li>*/}
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data.NameCategory.edges[2].node.NmaeCategory}</h3>
        <ul>
          {
            data.thirdBlock.edges.map(item => (
              <li key={item.node.id || null}><a href={`/services/${item.node.slug}`} className="link_sub-menu">{item.node.Title}</a></li>
            ))
          }
          {/*<li><a href="#" className="link_sub-menu">Gum Therapy</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu"> Preventative Care Program</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu">Initial Exam and Oral Cancer Screening</a></li>*/}
        </ul>
      </div>
      <div className="container_sub-menu">
        <h3 className="heading_sub-menu">{data.NameCategory.edges[3].node.NmaeCategory}</h3>
        <ul>
          {
            data.fourthBlock.edges.map(item => (
              <li key={item.node.id || null}><a href={`/services/${item.node.slug}`} className="link_sub-menu">{item.node.Title}</a></li>
            ))
          }
          {/*<li><a href="#" className="link_sub-menu">Teeth Whitening</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu">Dental Crowns</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu">Invisalign</a></li>*/}
          {/*<li><a href="#" className="link_sub-menu">Dental Veneers</a></li>*/}
        </ul>
      </div>
    </li>
    )
}




export default NavServices