import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const CommentSlider = (props) => {

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return(
      <StaticQuery
        query={graphql`
  query CommentQuery{
      allStrapiComments {
        edges {
          node {
            id
            Name
            rating
            Comment
              where_the_message_came_from {
              childImageSharp {
                fixed(width:150, height: 50){
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
  }
  `}
        render={data => (
          <section className="section-comment section-padding" style={props.stylesSection}>
            <h2 className="section-title">What <strong>people say</strong></h2>

            <div className="comment-container">

              <Swiper
                className={`swiper-container_comment`}
                breakpoints={{
                  // when window width is >= 640px
                  767: {
                    slidesPerView: 1,
                  },
                  1025: {
                    slidesPerView: 2.5,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={`true`}
                grabCursor={`true`}
                loop={`true`}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 6,
                }}
              >
                {
                  data.allStrapiComments.edges.map(comment => (

                    <SwiperSlide

                      key={comment.node.id}
                      className="card_comment">

                      <div className="rating">

                        {
                          Array.from(Array(comment.node.rating), (ietm, i) => {
                            return (<span key={i}>★</span>)
                          })

                        }


                      </div>

                      <p>{comment.node.Comment}</p>
                      {/*<div style="background: url('')"></div>*/}
                      <h3 className="name_user">{comment.node.Name}</h3>
                      {/*<Img*/}
                      {/*  style={{*/}
                      {/*    display: `${comment.node.where_the_message_came_from === null ? 'none' : 'inline-block'}`*/}
                      {/*  }}*/}
                      {/*fixed={comment.node.where_the_message_came_from !== null ? comment.node.where_the_message_came_from.childImageSharp.fixed : " "}*/}
                      {/*/>*/}

                      <img
                        style={{
                            display: `${comment.node.where_the_message_came_from === null ? 'none' : 'inline-block'}`
                          }}
                        src={comment.node.where_the_message_came_from !== null ? comment.node.where_the_message_came_from.childImageSharp.fixed.src : " "} alt="" />
                    </SwiperSlide>
                  ))
                }
              </Swiper>

            </div>
          </section>
        )}
      />
    )


}


export default CommentSlider


