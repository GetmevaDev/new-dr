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
                   url
                   alternativeText
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
                <Link to={`/`}>
                  <img  className={`logo-link lazyload`} data-src={data.logo.edges[0].node.Logo[0].url} alt={data.logo.edges[0].node.Logo[0].alternativeText} />

                </Link>

              </div>

              <div className="location">
                <Link to={data.contact.edges[0].node.Location.Link}>
                  <span className="icon fa fa-map-marker"></span>
                  {data.contact.edges[0].node.Location.Text}
                </Link>
                <Link to={`/contact-us`}>
                  <span className="icon fa fa-history"></span>

                  Working hours
                  {/*{data.allStrapiContacts.edges[0].node.ContactNavbar.WorkingHours.Text}*/}
                </Link>
              </div>

              <div className="contact_header">
                <a className="contact"
                   href={`tel:${data.contact.edges[0].node.NumberPhone}`}>{data.contact.edges[0].node.NumberPhone}</a>
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
