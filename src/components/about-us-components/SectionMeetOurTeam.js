import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


const SectionMeetOurTeam = () =>{


  const data = useStaticQuery(graphql`
    query TeamQuery{
        allStrapiAboutUs {
        edges {
          node {
            id
            Meet_Our_Team {
              id
              Name
              Specialization
              Link
              Photo {
                childImageSharp {
                  fixed(width: 550){
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)


  return(
    <section className="section-team">
      <h2 className="section-title">Meet Our <strong> Team</strong></h2>

      <div className="container">

        <Swiper
        className={`swiper-container_team`}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={`true`}
        grabCursor={`true`}
        breakpoints={{

          622: {
            slidesPerView: 2,
          },
          1025: {
            slidesPerView: 3.5,
          },
        }}
        >
          {
            data.allStrapiAboutUs.edges[0].node.Meet_Our_Team.map(elem => (
              <SwiperSlide
                className={`card-dr`}
              >
                <div className="img_team">
                  <img src={elem.Photo.childImageSharp.fixed.src} alt="" />
                  {/*<Img*/}
                  {/*  fixed={elem.Photo.childImageSharp.fixed}*/}
                  {/*/>*/}
                </div>
                <h3>{elem.Name}</h3>
                <h4>{elem.Specialization}</h4>
                <a href={elem.Link}><span className="fa fa-angle-right"></span></a>
              </SwiperSlide>
            ))
          }

        </Swiper>
        {/*<div className="swiper-container_team">*/}
        {/*  <div className="swiper-wrapper">*/}
        {/*    <div className="swiper-slide card-dr">*/}
        {/*      <div className="img_team">*/}

        {/*      </div>*/}
        {/*      <h3>Dr. Diana Gerov, DDS</h3>*/}
        {/*      <h4>Doctor of Dental Surgery</h4>*/}
        {/*      <a href="#"><span className="fa fa-angle-right"></span></a>*/}
        {/*    </div>*/}

        {/*  </div>*/}

        {/*</div>*/}
      </div>
    </section>
  )
}

export default SectionMeetOurTeam