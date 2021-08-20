import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"
import ReadMoreCommentButton from "./ReadMoreCommentButton"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

class CommentSlider extends React.Component{



  constructor(props) {
    super(props);
    this.state = {
      i: -1,
      show: false,
    };
  }

  addClass(id){
    this.setState({
      show: !this.state.show,
      i: id,
    })
  }







  render() {
    console.log(this.state.i)
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
              url
              alternativeText
            }
          }
        }
      }
  }
  `}
      render={data => (
        <section className="section-comment section-padding" style={this.props.stylesSection}>
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
                data.allStrapiComments.edges.map((comment, i) => {
                  const heightParagraph ={
                    maxHeight: '200px',
                    overflow: 'hidden',
                  };


                  return(
                    <SwiperSlide

                      key={comment.node.id}
                      className="card_comment">
                      <div className="rating">
                        {
                          Array.from(Array(comment.node.rating), (item, i) => {
                            return (<span key={i}>★</span>)
                          })
                        }
                      </div>

                      <p style={heightParagraph} className={` paragraph ${this.state.i === i ? "open_comment" : " "}`}>{comment.node.Comment}</p>

                      {comment.node.Comment.length >= 500 ? (<button
                        className={`ReadMoreComment`}
                        onClick={this.addClass.bind(this, i)}
                        style={{display: `${this.state.i === i ? "none" : "block"}`}}
                      >Read More</button>) : " "}

                      <h3 className="name_user">{comment.node.Name}</h3>
                      {
                        comment.node.where_the_message_came_from[0] !== undefined ? (
                          <img
                            style={{
                              display: `${comment.node.where_the_message_came_from === null ? 'none' : 'inline-block'}`
                            }}
                            className={`lazyload`}
                            data-src={ comment.node.where_the_message_came_from[0].url}
                            alt={comment.node.where_the_message_came_from[0].alternativeText} />
                        ) : null
                      }
                    </SwiperSlide>
                  )

                })
              }
            </Swiper>

          </div>
        </section>
      )}
    />
  )
}




}


export default CommentSlider


