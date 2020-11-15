import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Layout from "../components/layout"
import SectionHeaderArticle from "../components/Article Components/SectionHeaderArticle"
import MainSection from "../components/Article Components/MainSection"
import "../scss/main.scss"
const Article = ({ data }) => {
  // const bgSectionHeaderArticle = data.strapiBlogArchives.Background.childImageSharp.fixed.src || null;
  const titleSectionHeader = data.strapiBlogArchives.Title || "";
  const contentArticle = data.strapiBlogArchives.Content || "";
  const articleData = data.strapiBlogArchives.Data || ""

  console.log()
  return(
    <Layout>
      <SectionHeaderArticle
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
  query BlogArchivesQuery($slug: String){
      strapiBlogArchives(slug: { eq: $slug }) {
         id
         Title
         Data
         Content
      }
  }
`