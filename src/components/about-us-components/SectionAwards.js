import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



const SectionAwards = () =>{


  const data = useStaticQuery(graphql`
    query ClinicAwardsQuery{
        allStrapiAboutUs {
          edges {
            node {
              id
              Clinic_Awards {
                id
                Name
                image {
                  childImageSharp {
                    fixed(width: 100){
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
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  return(
    <section className="section-awards">
      <h2 className="section-title">Clinic <strong> Awards</strong></h2>
      <div className="container">
        <Swiper
          className={`swiper-container_awards`}
          breakpoints={{
            // when window width is >= 640px
            767: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }}

          spaceBetween={80}
          slidesPerView={1}
          grabCursor={`true`}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >

          {
            data.allStrapiAboutUs.edges[0].node.Clinic_Awards.map(elem => (
              <SwiperSlide
              key={elem.id}
              >

                <Img
                  fixed={elem.image.childImageSharp.fixed}
                />

                <h3 className="awards_title">{elem.Name}</h3>
              </SwiperSlide>
            ))
          }
          <button className="swiper-button-next ">
              <span className="fa fa-long-arrow-right"></span>
            </button>
            <button className="swiper-button-prev">
              <span className="fa fa-long-arrow-left"></span>
            </button>
        </Swiper>


        {/*<div className="swiper-container_awards">*/}
        {/*  <div className="swiper-wrapper">*/}
        {/*    <div className="swiper-slide">*/}
        {/*      <img className="swiper-img_awards" src="/assets/img/ada_logo.jpg" alt="">*/}
        {/*        <h3 className="awards_title">Member American Dental Association</h3>*/}
        {/*    </div>*/}
        {/*    <div className="swiper-slide">*/}
        {/*      <img className="swiper-img_awards" src="/assets/img/aafc_logo.jpg" alt="">*/}
        {/*        <h3 className="awards_title">Member American Academy Of Facial Cosmetics</h3>*/}
        {/*    </div>*/}
        {/*    <div className="swiper-slide">*/}
        {/*      <img className="swiper-img_awards" src="/assets/img/agd_logo.jpg" alt="">*/}
        {/*        <h3 className="awards_title">Member Academy of General Dentistry</h3>*/}
        {/*    </div>*/}
        {/*    <div className="swiper-slide">*/}
        {/*      <img className="swiper-img_awards" src="/assets/img/nysda-logo.jpg" alt="">*/}
        {/*        <h3 className="awards_title">Member-New York State Dental Association</h3>*/}
        {/*    </div>*/}

        {/*  </div>*/}
        {/*  <!-- Add Arrows -->*/}
        {/*  <button className="swiper-button-next ">*/}
        {/*    <span className="fa fa-long-arrow-right"></span>*/}
        {/*  </button>*/}
        {/*  <button className="swiper-button-prev">*/}
        {/*    <span className="fa fa-long-arrow-left"></span>*/}
        {/*  </button>*/}
        {/*</div>*/}

      </div>

    </section>
  )
}

export default SectionAwards