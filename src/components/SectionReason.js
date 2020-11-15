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
                        childImageSharp {
                          fixed(width: 100){
                              ...GatsbyImageSharpFixed
                          }
                        }
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
                    <Img
                    className={`reason_img`}
                      fixed={item.Image.childImageSharp.fixed}
                    />
                {/*< src="/assets/img/icon-team1.png" alt="" className="reason_img">*/}
              <h3 className="reason_title">{item.Title}</h3>
              <p>{item.Text}</p>

            </div>

          ))
        }

        {/*<div className="card-reason">*/}

        {/*  /!*<img src="/assets/img/icon-team1.png" alt="" className="reason_img">*!/*/}
        {/*    <h3 className="reason_title">Professional Team</h3>*/}
        {/*    <p>We are a team of exceptional oral care experts offering personalized and high-quality dental care for the*/}
        {/*      whole family. From routine cleaning to dental implants, we have the technology and experience to*/}
        {/*      effectively and gently take care of your dental needs. When you visit our Kew Gardens Hills office with an*/}
        {/*      emergency, or a check-up; your smile is our top priority. Our office features a staff of highly trained*/}
        {/*      professionals committed to your satisfaction and comfort.</p>*/}
        {/*</div>*/}
        {/*<div className="card-reason">*/}
        {/*  /!*<img src="/assets/img/icon-microscope.png" alt="" className="reason_img">*!/*/}
        {/*    <h3 className="reason_title">Cutting-edge Technologies</h3>*/}
        {/*    <p>Innovative digital X-ray imaging technologies have dramatically changed dental healthcare. The equipment*/}
        {/*      used in our digital radiography exposes dental patients to much less radiation. In fact, digital X-rays*/}
        {/*      use up to 85 percent less radiation than film X-rays. While conventional dental X-rays are relatively*/}
        {/*      safe, digital radiography is an excellent option for those who take X-rays on a regular basis or for those*/}
        {/*      who are concerned about radiation.</p>*/}
        {/*</div>*/}
        {/*<div className="card-reason">*/}
        {/*  /!*<img src="/assets/img/icon-experience.png" alt="" className="reason_img">*!/*/}
        {/*    <h3 className="reason_title">Years of Experience</h3>*/}
        {/*    <p>Dr. Diana Gerov is a graduate of New York University College of Dentistry. She has complete a residency*/}
        {/*      at Jamaica Hospital, a trauma one facility. Dr Gerov is an exceptional doctor who excels in comprehensive*/}
        {/*      care treating patients in an effective and timely manner. She is known for her gentle touch and care. Dr.*/}
        {/*      Gerov treats all patients from the range of pediatric, adult and geriatric patients. We welcome you to our*/}
        {/*      practice to experience a happy and healthy smile.</p>*/}
        {/*</div>*/}
      </div>

    </section>
  )}
  />
)




export default SectionReason