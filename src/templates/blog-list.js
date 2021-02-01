import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SectionHeaderBlog from "../components/Blog/SectionHeaderBlog"
import "../scss/main.scss"
import SEO from "../components/seo"



export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allStrapiBlogArchives.edges;
    const { currentPage, numPages } = this.props.pageContext

    const activePage = {
      backgroundColor: '#f9b43d',
      color: '#3f474a',
      ':hover':{
        color: '#3f474a',
      },
    };
    return (
      <Layout>

        <SectionHeaderBlog/>
        <section className="section_blog_list">
         <h2 className="section-title">Recent Posts</h2>
        <div className="container row">
        {posts.map(({ node }) => {
          const title = node.Title || node.id;
          const content = node.Content;
          return(
            <div className="card_article" key={node.id}>
              <div className={`img_container`}>
              </div>
              <div className={`text_container`}>
                <h4 className="recent-posts__item-title">
                  <a href={`/blog/${node.slug}`}>{title}</a>
                </h4>
                <p>{content}</p>
                <div className="albus-blog__item-more">
                  <a href={`/blog/${node.slug}`}>Read more →</a>
                </div>
              </div>


            </div>
          )
        })}

        </div>
          <div className="container row_pagination">
            <span className="pages">{`Pages ${currentPage} of ${numPages}`}</span>
            <Link
              className={`page larger`}
              to={`/blog/${currentPage === 2 ? "" : currentPage - 1}`}
              style={{
              display: `${currentPage === 1 ? 'none' : 'inline'}`
            }}
            >
              «
            </Link>
          {Array.from({ length: numPages }, (_, i) => (
              <Link
                className={`page larger `}
                key={`pagination-number${i + 1}`}
                title={`Page${i + 1}`}
                to={`/blog/${i === 0 ? "" : i + 1}`}
                activeStyle={currentPage ? activePage : ''}
              >
                {i + 1}
              </Link>
          ))}

            <Link
              className={`page larger`}
              to={`/blog/${currentPage + 1}`}
              style={{
              display: `${currentPage === numPages ? 'none' : 'inline'}`,
            }}
            >
              »
            </Link>
            <Link
              className={`last`}
              to={`/blog/${numPages}`}
              style={{
              display: `${currentPage === numPages ? 'none' : 'inline'}`,
            }}>
              Last»
            </Link>
          </div>
        </section>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int, $limit: Int) {
    allStrapiBlogArchives(
      sort: { fields: createdAt, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
        id
         Title
        Data
        Content
        slug
        }
      }
    }
  }
`