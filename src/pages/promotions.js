import React from "react"
import Layout from "../components/layout"
import SectionHeaderPromotions from "../components/Promotions/SectionHeaderPromotions"
import SectionPromotions from "../components/Promotions/SectionPromotions"
import "../scss/main.scss"


const Promotions = () => {

  return(
    <Layout>
      <SectionHeaderPromotions />
      <SectionPromotions />
    </Layout>
  )
}


export default Promotions