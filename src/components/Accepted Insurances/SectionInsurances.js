import React from "react"
import {graphql, useStaticQuery} from "gatsby"



const SectionInsurances = () => {


  const data = useStaticQuery(graphql`
    query InsurancesQuery{
        allStrapiAcceptedInsurances {
          edges {
            node {
              InsurancesWeAccept {
                Name_insurance
              }
            }
          }
        }
    }
  `)


  const insurances = data.allStrapiAcceptedInsurances.edges[0].node.InsurancesWeAccept || null;

  return(
    <section className="section-insurances">
      <div className="container">
        <h2 className="section-title"><strong>Insurances </strong>We Accept</h2>
        <ul className="row">
          {
            insurances.map(item => {
              const nameInsurance = item.Name_insurance || "";

              return(
                <li>{nameInsurance}</li>
              )
            })
          }
        </ul>
        <h3><strong>And many Other Insurances</strong></h3>
      </div>
    </section>
  )
}


export default SectionInsurances