import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import "../scss/main.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="not_found_page">404</h1>
    <h2 className="title_404">Page not found</h2>
    <a href="/" className="appointment" style={{
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translateX(-50%)',
    }}>Go back to homepage</a>
  </Layout>
)

export default NotFoundPage
