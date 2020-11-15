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

          {/*<li>Aetna PPO</li>*/}
          {/*<li>Ameritas PPO</li>*/}
          {/*<li>Blue Cross Blue Shield PPO</li>*/}
          {/*<li>Careington PPO</li>*/}
          {/*<li>CareFirst Dental PPO</li>*/}
          {/*<li>Cigna PPO</li>*/}
          {/*<li>Covenant Life</li>*/}
          {/*<li>Dentemax PPO</li>*/}
          {/*<li>Delta Dental PPO / Premier</li>*/}
          {/*<li>Dental Save</li>*/}
          {/*<li>DHA – Dental Health Alliance</li>*/}
          {/*<li>Direct Dental Administrators</li>*/}
          {/*<li>EBSO</li>*/}
          {/*<li>Formula Corp</li>*/}
          {/*<li>GEHA – CONNECTION DENTAL</li>*/}
          {/*<li>Guardian PPO</li>*/}
          {/*<li>HealthPlex PPO</li>*/}
          {/*<li>Integrity Administrators</li>*/}
          {/*<li>Metlife PDP +</li>*/}
          {/*<li>Meritain</li>*/}
          {/*<li>Momentum Insurance Plans</li>*/}
          {/*<li>Mutual of Omaha – Mutually Preferred Network</li>*/}
          {/*<li>Physicians Mutual</li>*/}
          {/*<li>Preferred Group (Great Neck Teachers)</li>*/}
          {/*<li>Preferred One</li>*/}
          {/*<li>Sun Life Financial</li>*/}
          {/*<li>Tricare Dental Plan</li>*/}
          {/*<li>Oxford PPO</li>*/}
          {/*<li>United Concordia PPO</li>*/}
          {/*<li>United Healthcare PPO</li>*/}
        </ul>

        <h3><strong>And many Other Insurances</strong></h3>
      </div>
    </section>
  )
}


export default SectionInsurances