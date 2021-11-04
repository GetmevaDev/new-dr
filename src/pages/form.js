import React from "react"
import SectionHeaderAboutUs from "../components/about-us-components/SectionHeaderAboutUs"
import Layout from "../components/layout"
import Map from "../components/Map"
import NewForm from "../components/newForm"
import SectionHeader from "../components/SectionHeader"
const form = () => {
  return (
    <Layout>
      <section className="section-header_pages flex"></section>
      <NewForm />
      <Map />
    </Layout>
  )
}

export default form
