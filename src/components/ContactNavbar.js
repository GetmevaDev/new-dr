import React from "react"
import {Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import MakeAnAppointment from "./MakeAnAppointment"






const ContactNavbar = () => {

  const popupMenu = () => {
    let buttonMenu = document.querySelector(".btn-menu");
    let menu = document.querySelector(".adaptive_menu");
    let wrapper = document.querySelector(".content_container");
    let btnDecorationLine = document.querySelector(".btn_dekoration_line");
    menu.classList.toggle("menu_active");
    wrapper.classList.toggle("content_active_menu");
    btnDecorationLine.classList.toggle("btn-menu_active");
    document.querySelector("html").classList.toggle("no-scroll");
  }

  return(
      <StaticQuery

        query={graphql`
          query HeaderSiteQuery{
            contact: allStrapiContacts {
              edges {
                node {
                  Location {
                    Text
                    Link
                  }
                  NumberPhone
                }
              }
            }
            logo: allStrapiSiteLogo {
              edges {
                node {
                  Logo {
                    childImageSharp {
                      fixed(width: 180){
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          }
        `}

        render={data => (
          <div className="border-bottom">

            <button
              onClick={popupMenu}
              className="btn-menu"
            >
              <span className="btn_dekoration_line"></span>
            </button>
            <div className="container row padding-contact-block">
              <div className="site-header_contact-block">
                <Link to={`#`}>
                  <Img
                    className="logo-link"
                    fixed={data.logo.edges[0].node.Logo.childImageSharp.fixed}
                  />
                </Link>

              </div>

              <div className="location">
                <Link to={data.contact.edges[0].node.Location.Link}>
                  <span className="icon fa fa-map-marker"></span>
                  {data.contact.edges[0].node.Location.Text}
                </Link>
                <Link to="#">
                  <span className="icon fa fa-history"></span>

                  Working hours
                  {/*{data.allStrapiContacts.edges[0].node.ContactNavbar.WorkingHours.Text}*/}
                </Link>
              </div>

              <div className="contact_header">
                <Link className="contact"
                   to={`tel:${data.contact.edges[0].node.NumberPhone}`}>{data.contact.edges[0].node.NumberPhone}</Link>
                {/*<a className="appointment" href="#">Make an Appointment</a>*/}
                <MakeAnAppointment
                  classItem={`appointment`}
                />
              </div>
            </div>
          </div>
        )
        }
      />
    )



}



export default ContactNavbar
