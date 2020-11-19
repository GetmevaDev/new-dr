import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeaderArticle from "../components/Article Components/SectionHeaderArticle"
import MainSection from "../components/Article Components/MainSection"
import "../scss/main.scss"
import SEO from "../components/seo"
const Article = ({ data }) => {
const bgSectionHeaderArticle = data.strapiArticles.Background.childImageSharp.fixed.src || " ";
const titleSectionHeader = data.strapiArticles.title || null;
const contentArticle = data.strapiArticles.content || null;
const articleData = data.strapiArticles.Data || null

  console.log(data)
  return(
    <Layout>
      <SEO title={titleSectionHeader} />
      <SectionHeaderArticle
      background={bgSectionHeaderArticle}
      title={titleSectionHeader}
      />
      <MainSection
        articleData={articleData}
        content={contentArticle}
      />
    </Layout>
  )
}

export default Article
export const articlesQuery = graphql`
  query ArticlesQuery($slug: String){
      strapiArticles(slug: { eq: $slug }) {
        title
        content
        Data
            Background {
      childImageSharp {
         fixed(width:2500){
                  ...GatsbyImageSharpFixed
              }
            }
          }
      }
  }
`