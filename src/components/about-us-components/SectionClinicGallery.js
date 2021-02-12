import React from "react"
import {graphql, StaticQuery} from "gatsby"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



class SectionClinicGallery extends React.Component{


componentDidMount() {

}


  render(){

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

  return(

    <StaticQuery
    query={graphql`
  query GalleryQuery{
   allStrapiAboutUs {
      edges {
        node {
          id
          ClinicGallery {
            AltText
            Photo {
               alternativeText
               url
            }
          }
        }
      }
    }
  }
`}
    render={data => (
      <section className="section-slide_gallery">
        <h2 className="section-title">Clinic <strong> Gallery</strong></h2>
        <div className="container">

          <Swiper
            className={`swiper-container_gallery`}
            slidesPerView={1}

            grabCursor={`true`}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}

          >


            <div className="swiper-wrapper">
              {
                data.allStrapiAboutUs.edges[0].node.ClinicGallery.map(elem =>(
                    <div className={`swiper-slide card-gallery`}>
                      <img
                        className={`lazyload`}
                        data-src={elem.Photo[0].url}
                        alt={elem.Photo[0].alternativeText}
                      />
                    </div>
                ))
              }
            </div>
          </Swiper>
          <div className="swiper-button-next gallery-next">
            <span className="fa fa-angle-right fa-3x"></span>
          </div>
          <div className="swiper-button-prev gallery-prev">
            <span className="fa fa-angle-left fa-3x"></span>
          </div>




        </div>
      </section>
    )}
    />

  )
}


}


export default SectionClinicGallery