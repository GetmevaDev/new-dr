import React from "react"
import Layout from "../components/layout"
import SectionHeaderPatientSurvey from "../components/Patient Survey/SectionHeaderPatientSurvey"
import PatientSurveyForm from "../components/Patient Survey/PatientSurveyForm"
import "../scss/main.scss"
import SEO from "../components/seo"


const PatientSurvey = () => {

  return(
    <Layout>
      <SEO title="Patient Survey" />
      <SectionHeaderPatientSurvey />
      <PatientSurveyForm />
    </Layout>
  )
}



export default PatientSurvey