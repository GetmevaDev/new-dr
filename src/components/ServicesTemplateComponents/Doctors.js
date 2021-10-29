import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import MakeAnAppointment from "../MakeAnAppointment"

const Doctors = () => {
  // const data = useStaticQuery(graphql`
  //   query DoctorsQuery {
  //     fullContent: allStrapiServices {
  //       edges {
  //         node {
  //           id
  //           Title
  //           Content
  //           slug
  //           Doctors {
  //             Photo {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <h3>Available Doctors</h3>
      {console.log(data)}
      {data.fullContent.edges.map(item => (
        <div className="card-dr-row">
          <div className="img">
            <img
              width="100"
              height="100"
              src={item.node.Doctors[0].Photo[0].url}
              alt=""
            />
          </div>
        </div>
      ))}
      {/* {data.allStrapiServices.edges.node.Doctors.map(item => (
        <div key={item?.id} className="card-dr-row">
          <div className="img">
            {/* <Img
             fixed={item.Photo !== null ? item.Photo.childImageSharp.fixed : ""}
            /> */}
      {/* <img src={item?.Photo !== null ? item?.Photo[0]?.url : ""} />
          </div>  */}
      {/* <div className="name_dr">
            <h3 id="name">{item?.Name}</h3>
            <span>{item.Specialization}</span>
          </div> */}
      {/* <a href={`${item.Link}`}>
            <span className="fa fa-angle-right"></span>
          </a> */}
      {/* </div> */}
      {/* ))} */}
      <MakeAnAppointment classItem="appointment margin-bottom" />
      {/*<div className="block_appointment">*/}
      {/*  <a className="appointment" href="#">Make an Appointment</a>*/}
      {/*</div>*/}
    </>
  )
}

export default Doctors
