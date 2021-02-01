import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeaderPatientSurvey from "../components/Patient Survey/SectionHeaderPatientSurvey"
import PatientSurveyForm from "../components/Patient Survey/PatientSurveyForm"
import "../scss/main.scss"
import SEO from "../components/seo"


const PatientSurvey = ({ data }) => {

  return(
    <Layout>
      <SEO seo={data.strapiPatientSurvey.SEO_Patient_Survey} />
      <SectionHeaderPatientSurvey />
      <PatientSurveyForm />
    </Layout>
  )
}



export default PatientSurvey
export const query = graphql`
    {
        strapiPatientSurvey {
            SEO_Patient_Survey {
                Description
                Title
                Image_Url
            }
        }
    }
`