import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import SocialMedia from "../SocialMedia"



const SectionFollowUs = () =>{


  const data = useStaticQuery(graphql`
    query SectionFollowUsQuery{
    pageQuery: allStrapiContactUs {
        edges {
          node {
            Text
          }
        }
      }
      contact: allStrapiContacts {
          edges {
            node {
              SocialMedia {
                NameSocialMedia
                Link
                id
              }
            }
          }
        }
    }
  `)

  const text = data.pageQuery.edges[0].node.Text || null;


  return(
    <section className="section">
      <div className="container">
        <div className="block-text">
          <p>{text}</p>
          <h3>Follow Us</h3>

          <ul className="row">

            {
              data.contact.edges[0].node.SocialMedia.map(item =>{
                const name = item.NameSocialMedia || null;
                const link = item.Link || null;

                return(
                  <li><a href={link}><span className={`fa fa-${name}`}></span></a></li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}


export default SectionFollowUs