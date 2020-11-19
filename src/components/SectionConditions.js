import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import { Swiper, SwiperSlide } from 'swiper/react';


const SectionConditions = () => (

  <StaticQuery
    query={graphql`
    query ArticleQuery{
        allStrapiArticles {
        edges {
          node {
            id
            title
            content
            slug
          }
        }
      }
    }
`}
    render={data => (
      <section className="section-conditions">
        <div className="slider_container">

          <Swiper
            breakpoints={{
              // when window width is >= 640px
              767: {
                slidesPerView: 2,
              },
              1025: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={0}
            slidesPerView={1}

          >
            {
              data.allStrapiArticles.edges.map(article => (

                <SwiperSlide

                  key={article.node.id || null}
                  className="card_condition"  >
                  <h3 className="heading_condition"><Link to={`/article/${article.node.slug || null}`}>{article.node.title || null}</Link></h3>
                  <p>{article.node.content.substring(0,168).concat('...')}</p>
                  <Link className="read-more_link" to={`/article/${article.node.slug || null}`}>Read more →</Link>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>

      </section>
    )}
  />

)



export default SectionConditions