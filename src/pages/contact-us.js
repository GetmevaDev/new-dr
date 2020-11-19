import React from "react"
import Layout from "../components/layout"
import SectionHeaderContactUs from "../components/ContactUs/SectionHeaderContactUs"
import SectionContact from "../components/ContactUs/SectionContact"
import SectionFollowUs from "../components/ContactUs/SectionFollowUs"
import "../scss/main.scss"
import SEO from "../components/seo"

const ContactUs = () => {

  return(
    <Layout>
      <SEO title="Contact Us" />
      <SectionHeaderContactUs />
      <SectionContact />
      <SectionFollowUs />
    </Layout>
  )
}

export default ContactUs