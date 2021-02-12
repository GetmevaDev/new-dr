import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"
import MakeAnAppointment from "../components/MakeAnAppointment"
import "../scss/main.scss"
import SEO from "../components/seo"


const TeamDr = ({ data }) => {
  const specialization = data.strapiTeams.Specialization || null;
  const name = data.strapiTeams.Name || null;
  const photo = data.strapiTeams.Photo[0].url || null;
  const alt = data.strapiTeams.Photo[0].alternativeText || null;
  const content = data.strapiTeams.Content || null;
  return(
    <Layout>

      <section className="section-testimonial">
        <div className="container row">
          <div className="heading-pages">
            <h3>{specialization}</h3>
            <h2 className={`name_dr`}>{name}</h2>
            <MakeAnAppointment
            classItem={`appointment`}
            />
          </div>
          <div className="portrait-dr new_width_dds">
            <img className={`lazyload`} data-src={photo} alt={alt} />

          </div>
        </div>
      </section>
      <section className={`section-description`}>
        <div>
          <ReactMarkdown
          source={content}
          />
        </div>
      </section>
    </Layout>
  )
}

export default TeamDr
export const teamQuery = graphql`
  query TeamsQuery($slug: String){
        strapiTeams(slug: { eq: $slug }) {
      Specialization
      Name
      Content
      Photo {
          url
          alternativeText
      }
    }
  }
`