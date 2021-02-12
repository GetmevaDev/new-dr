import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SocialMedia from "./SocialMedia"
import NavServices from "./NavServices"


const Navbar = () => {



  return(
      <StaticQuery
        query={graphql`
    query NavigationMenusQuery{
        menu: allStrapiNavigationMenu {
        edges {
          node {
            Header_menu {
            id
              Name_Page
              Link_Page
              Sub_Menu_Item {
              id
                Name_Page
                Link_Page
              }
            }
          }
        }
      }
      logo: allStrapiSiteLogo {
          edges {
            node {
              AdaptiveLogo {
                 url
          alternativeText
              }
            }
          }
        }
    }
`}
        render={data => (
          <div className="container ">

            <div className="adaptive_menu padding row">
              <nav className="site-header_nav">
                <ul className="site-nav_items row">
                  <li className="adaptive_menu_logo order_0">
                    <Link to={"/"}
                          className="adaptive_menu_logo"
                    >
                      {/*<Img*/}
                      {/*  fluid={data.logo.edges[0].node.AdaptiveLogo.childImageSharp.fluid}*/}
                      {/*/>*/}
                      <img
                        className={`lazyload`}
                        data-src={data.logo.edges[0].node.AdaptiveLogo[0].url}
                        alt={data.logo.edges[0].node.AdaptiveLogo[0].alternativeText}
                      />
                    </Link>
                  </li>
                  {

                    data.menu.edges[0].node.Header_menu.map((elem, i, arr) => (
                      <li key={elem.id} className={`nav_item order_${i +1}
                      ${elem.Sub_Menu_Item.length > 0 ? ("hover_pop-up_menu") : (" ")}`}>

                        <a href={elem.Link_Page} className="nav_link">
                          {elem.Name_Page}
                          {elem.Sub_Menu_Item.length > 0 ? (<span className="fa fa-angle-down"></span>) : (' ')}

                        </a>
                        {elem.Sub_Menu_Item && elem.Sub_Menu_Item.length > 0 ?
                          elem.Sub_Menu_Item.map(nameSubMenu => (
                            <a
                              key={nameSubMenu.id}
                              className="pop-up_items" href={nameSubMenu.Link_Page}>
                              {nameSubMenu.Name_Page}
                            </a>
                          ))
                          : null}
                      </li>
                    ))

                  }
                  <NavServices />
                </ul>
              </nav>
              <SocialMedia />
            </div>
          </div>
        )}

      />
    )


}



export default Navbar