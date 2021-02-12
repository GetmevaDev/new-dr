import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import MakeAnAppointment from "../MakeAnAppointment"
import SectionAdvantage from "../../pages/technology"

const SectionPromotions = () =>{

  const data = useStaticQuery(graphql`
    query SectionPromotionsQuery{
        allStrapiPromotions {
          edges {
            node {
              Title
              Content
              SwitchAppointment
              Image {
                  url
                  alternativeText
              }
            }
          }
        }
    }
  `)

  return(
    <div className="container">

      {
        data.allStrapiPromotions.edges.map(elem => {

          const title = elem.node.Title || null;
          const content = elem.node.Content || null;
          const switchAppointment = elem.node.SwitchAppointment || null;
          const img = elem.node.Image[0].url || null;
          const alt = elem.node.Image[0].alternativeText || null;

          return(
            <section className="section-padding row aligan-items">
              <div className="text-container">
                <h3 className="heading_title">{title}</h3>
                <p>{content}</p>
                {switchAppointment ? (<MakeAnAppointment
                  classItem={`appointment width-appointment-button`}
                />) : ""}
              </div>
              <div className="container-img">
                <img className={`lazyload`} data-src={img} alt={alt} />
              </div>
            </section>
          )
        })
      }







      {/*<section className="section-padding row aligan-items">*/}
      {/*  <div className="text-container">*/}
      {/*    <h3 className="heading_title">$149 New Patient Special</h3>*/}
      {/*    <p>Comprehensive Exam, Oral Cancer Screening, Full Series Of X-Rays & Cleaning. Offer good in the absence of*/}
      {/*      periodontal disease. Includes Oral Cancer Screening. New patients only…</p>*/}
      {/*  </div>*/}
      {/*  <div className="container-img"><img src="/assets/img/checkup.jpg" alt=""></div>*/}
      {/*</section>*/}
      {/*<section className="section-padding row aligan-items">*/}
      {/*  <div className="text-container">*/}
      {/*    <h3 className="heading_title">$399 In-office Teeth Whitening</h3>*/}
      {/*    <p>REBATE AVAILABLE! Get Up To 8 Shades Whiter! At Happy Smiles Dental, we offer the Zoom! system of chairside*/}
      {/*      teeth whitening, a proven safe and effective method for…</p>*/}
      {/*    <a href="#" className="learn_more">Make an Appointment</a>*/}
      {/*  </div>*/}
      {/*  <div className="container-img"><img src="/assets/img/2-14-2018-1-18-08-PM.png" alt=""></div>*/}
      {/*</section>*/}
      {/*<section className="section-padding row aligan-items">*/}
      {/*  <div className="text-container">*/}
      {/*    <h3 className="heading_title">Patient Referral Program</h3>*/}
      {/*    <p>Refer a new patient to Happy Smiles Dental and you’ll both get a $20 towards any procedure through our*/}
      {/*      Sharing Happy Smiles referral program. Once…</p>*/}
      {/*  </div>*/}
      {/*  <div className="container-img"><img src="/assets/img/kids-smiling.jpg" alt=""></div>*/}
      {/*</section>*/}
      {/*<section className="section-padding row aligan-items">*/}
      {/*  <div className="text-container">*/}
      {/*    <h3 className="heading_title">$500 OFF Invisalign</h3>*/}
      {/*    <p>FREE INITIAL CONSULTATION: ($200 Value) (Conditions apply)</p>*/}
      {/*  </div>*/}
      {/*  <div className="container-img"><img src="/assets/img/invisalign.jpg" alt=""></div>*/}
      {/*</section>*/}
      {/*<section className="section-padding row aligan-items">*/}
      {/*  <div className="text-container">*/}
      {/*    <h3 className="heading_title">$500 OFF Custom Abutment + Crown</h3>*/}
      {/*    <p>*Includes: Custom Abutment + Crown. *Full payment due upon commencement of treatment *All work must be*/}
      {/*      completed at Happy Smiles Dental to qualify for Promotion.</p>*/}

      {/*  </div>*/}
      {/*  <div className="container-img"><img src="/assets/img/dental-implant.jpg" alt=""></div>*/}
      {/*</section>*/}
    </div>
  )
}



export default SectionPromotions