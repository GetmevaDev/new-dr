import React from "react"
import Layout from "../components/layout"
import SectionHeaderPromotions from "../components/Promotions/SectionHeaderPromotions"
import SectionPromotions from "../components/Promotions/SectionPromotions"
import "../scss/main.scss"
import SEO from "../components/seo"


const Promotions = () => {

  return(
    <Layout>
      <SEO title="Promotions" />
      <SectionHeaderPromotions />
      <SectionPromotions />
    </Layout>
  )
}


export default Promotions