import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import MakeAnAppointment from "../MakeAnAppointment"


const Doctors = () => {


  const data = useStaticQuery(graphql`
      query DoctorsQuery{
          strapiServices {
            id
            Doctors {
            id
              Name
              Specialization
              Link
              
              Photo {
                  url
                  alternativeText
              }
            }
          }
          
      }
  `)



  return(
    <>
      <h3>Available Doctors</h3>
      {
        data.strapiServices.Doctors.map(item =>(
          <div
            key={item.id}
            className="card-dr-row">
            <div className="img">


              {/*<Img*/}
              {/*  fixed={item.Photo !== null ? item.Photo.childImageSharp.fixed : ""}*/}
              {/*/>*/}
              <img src={item.Photo !== null ? item.Photo[0].url : ""} alt={item.Photo !== null ? item.Photo[0].alternativeText : ""} />
            </div>
            <div className="name_dr">
              <h3 id="name">{item.Name}</h3>
              <span>{item.Specialization}</span>
            </div>
            <a href={`${item.Link}`}><span className="fa fa-angle-right"></span></a>
          </div>
        ))
      }
      <MakeAnAppointment
        classItem="appointment margin-bottom"
      />
      {/*<div className="block_appointment">*/}
      {/*  <a className="appointment" href="#">Make an Appointment</a>*/}
      {/*</div>*/}
    </>
  )
}



export default Doctors