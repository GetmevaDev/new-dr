import React from "react"
import Layout from "../components/layout"
import SectionHeaderPatientSurvey from "../components/Patient Survey/SectionHeaderPatientSurvey"
import PatientSurveyForm from "../components/Patient Survey/PatientSurveyForm"
import "../scss/main.scss"


const PatientSurvey = () => {

  return(
    <Layout>
      <SectionHeaderPatientSurvey />
      <PatientSurveyForm />
    </Layout>
  )
}



export default PatientSurvey