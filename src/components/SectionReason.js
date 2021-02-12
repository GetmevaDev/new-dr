import React from "react"
import { StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"

const SectionReason = () => (
  <StaticQuery
  query={graphql`
  query ReasonQuery{
            allStrapiHomepageElements {
              edges {
                node {
                  Section_Reason {
                    id
                    Text
                    Block_Reason {
                      id
                      Title
                      Text
                        Image {
                          url
                          alternativeText
                      }
                    }
                  }
                }
              }
            }
      }
  `}
  render={data => (
    <section className="section-reason">
      <h2 className="section-title">Why choose <strong>Happy Smiles Dental?</strong></h2>
      <div className="container">
        <p>{data.allStrapiHomepageElements.edges[0].node.Section_Reason.Text}</p>
      </div>
      <div className="container row">
        {
          data.allStrapiHomepageElements.edges[0].node.Section_Reason.Block_Reason.map(item => (
            <div
              className="card-reason"
            key={item.id}
            >
              <img className={`lazyload`} data-src={item.Image[0].url} alt={item.Image[0].alternativeText} />
                    {/*<Img*/}
                    {/*className={`reason_img`}*/}
                    {/*  fixed={item.Image.childImageSharp.fixed}*/}
                    {/*/>*/}
                {/*< src="/assets/img/icon-team1.png" alt="" className="reason_img">*/}
              <h3 className="reason_title">{item.Title}</h3>
              <p>{item.Text}</p>

            </div>

          ))
        }
      </div>

    </section>
  )}
  />
)




export default SectionReason