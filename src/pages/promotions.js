import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SectionHeaderPromotions from "../components/Promotions/SectionHeaderPromotions"
import SectionPromotions from "../components/Promotions/SectionPromotions"
import "../scss/main.scss"
import SEO from "../components/seo"


const Promotions = ({ data }) => {

  return(
    <Layout>
      <SEO seo={data.strapiPromotionsPage.SEO_Promotions} />
      <SectionHeaderPromotions />
      <SectionPromotions />
    </Layout>
  )
}


export default Promotions
export const query = graphql`
    {
        strapiPromotionsPage {
            SEO_Promotions {
                Description
                Image_Url
                Title
            }
        }
    }
`