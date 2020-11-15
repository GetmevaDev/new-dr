import React from "react"
import { StaticQuery, graphql } from "gatsby"

const MakeAnAppointment = (props) => (

  

   <StaticQuery

     query={graphql`
     query AppointmentLinkQuery{
          allStrapiContacts {
            edges {
              node {
                Link_Make_An_Appointment
              }
            }
          }
     }
     `}

     render={data => (
       <>
       {
         data.allStrapiContacts.edges.map(item => (

           <a
             key={item.node.id || null}
             className={props.classItem}
             href={`${item.node.Link_Make_An_Appointment || null}`}>
             Make An Appointment
           </a>

         ))
       }
      </>
     )}
   />
  )


export  default MakeAnAppointment