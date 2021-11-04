import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SectionHeaderContactUs from "../components/ContactUs/SectionHeaderContactUs"
import SectionContact from "../components/ContactUs/SectionContact"
import SectionFollowUs from "../components/ContactUs/SectionFollowUs"
import "../scss/main.scss"
import SEO from "../components/seo"
import ContactForm from "../components/ContactUs/ContactForm"
import NewForm from "../components/newForm"
import CommentsForm from "../components/CommentsForm"

const ContactUs = ({ data }) => {
  return (
    <Layout>
      <SEO seo={data.strapiContactUs.SEO_Contact_Us} />
      <SectionHeaderContactUs />
      <SectionContact />
      {/* <NewForm /> */}
      <CommentsForm />
      {/* <ContactForm /> */}
      <SectionFollowUs />
    </Layout>
  )
}

export default ContactUs
export const query = graphql`
  {
    strapiContactUs {
      SEO_Contact_Us {
        Description
        Image_Url
        Title
      }
    }
  }
`
