import React from "react"
import {graphql, StaticQuery} from "gatsby"


const FooterNavbar = () => (

  <StaticQuery
  query={graphql`
  query FooterMenuQuery{
        allStrapiNavigationMenu {
          edges {
            node {
              Footer_menu {
              id
                Name_Page
                Link_Page
              }
            }
          }
        }
  }
  `}
  render={data =>(
    <section className="section-footer_nav">
      <div className="container">
        <nav className="footer-nav" data-da="adaptive-footer,3,1025">
          <ul className="row">
            {

              data.allStrapiNavigationMenu.edges[0].node.Footer_menu.map(elem => (
                <li key={elem.id} >

                  <a href={elem.Link_Page} className="footer-nav_link">{elem.Name_Page} </a>

                </li>
              ))

            }

            <li>
              <a href="#" className="footer-nav_link">Terms of Service</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )}
  />
)



export default FooterNavbar