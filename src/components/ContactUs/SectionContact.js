import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionContact = () => {


  const data = useStaticQuery(graphql`
    query SectionContactQuery{
      dayAndTime: allStrapiWorkingHours {
          edges {
            node {
              Day_And_Hours {
                id
                Day
                Time
              }
            }
          }
        }
        location: allStrapiContacts {
          edges {
            node {
              Location {
                Text
                Link
                id
              }
            }
          }
        }
    }
  `)

  const locationText = data.location.edges[0].node.Location.Text || null;
  const locationLink = data.location.edges[0].node.Location.Link || null;

  return(
    <section className="section-contact">
      <div className="container">
        <h3>Working hours:</h3>

        {
          data.dayAndTime.edges[0].node.Day_And_Hours.map(elem => {

            const day = elem.Day || null;
            const time = elem.Time || null;
            return(
              <div className="time-work">
                <span className="day_of_week">{day}</span> <span className="time">{time}</span>
              </div>
            )
          })
        }
        <div>
          <span className="fa fa-map-marker block"></span>
          <a href={locationLink}>{locationText}</a>
        </div>
      </div>
    </section>
  )
}

export default SectionContact