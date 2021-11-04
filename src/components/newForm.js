import React from "react"

const newForm = () => {
  const arr = [
    { name: "Fatigue", id: 1 },
    { name: "Fever", id: 2 },
    { name: "Headache", id: 3 },
    { name: "  Nausea abdominal pain", id: 4 },
    { name: " Weight change.", id: 5 },
    { name: "Vision problem", id: 6 },
    { name: "Chest pain", id: 7 },
    { name: "Irregular hear beat fainting", id: 8 },
    { name: "Joint pain", id: 9 },
    { name: "Headache", id: 10 },
    { name: "Numbness", id: 11 },
    { name: "Stress", id: 12 },
    { name: "Depression", id: 13 },
    { name: "Rectal bleeding", id: 14 },
    { name: "Blood in urine", id: 15 },
    { name: "Pregnant", id: 16 },
  ]

  return (
    <div>
      <form className="newForm container">
        <div className="topNewForm">
          <label>
            <input
              className="newformInput"
              type="text"
              placeholder="First Name"
            />
          </label>

          <label>
            <input
              className="newformInput"
              type="text"
              placeholder="Last Name"
            />
          </label>

          <label className="lastinput">
            <input
              className="newformInput"
              type="text"
              placeholder="Date of birth"
            />
          </label>
        </div>

        <div className="centerNewForm">
          <div className="leftNewForm">
            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="Address"
              />
            </label>

            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="E-mail"
              />
            </label>

            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="Current medications"
              />
            </label>
          </div>

          <div className="rightNewForm">
            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="Phone "
              />
            </label>

            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="Allergies/drug reactions"
              />
            </label>

            <label>
              <input
                className="newformInput"
                type="text"
                placeholder="Current medical conditions"
              />
            </label>
          </div>
        </div>

        <div className="formTitle">
          <div className="symptoms">
            <h3>Symptoms</h3>

            <div className="symptomsMain">
              <div className="symptomsLeft">
                {arr.slice(0, 8).map(({ name, id }) => (
                  <label key={id}>
                    <input type="checkbox" name="happy" value="yes" />
                    <span>{name}</span>
                  </label>
                ))}
              </div>

              <div className="symptomsRight">
                {arr.slice(8, 16).map(({ name, id }) => (
                  <label key={id}>
                    <input type="checkbox" name="happy" value="yes" />
                    <span>{name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="serviceInterestedForm">
            <h3>Service interested in</h3>
            <div className="serviceInterestedForm_inner">
              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>IV Infusion </span>
              </label>

              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>Microneedling </span>
              </label>

              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>PRP</span>
              </label>

              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>Botox</span>
              </label>
            </div>
          </div>
          <div className="packagesForm">
            <h3>Packages</h3>

            <div className="packagesForm_inner">
              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>I Vitamin B 12 intramuscular injection $30 </span>
              </label>

              <label>
                <input type="checkbox" name="happy" value="yes" />
                <span>Bit D3 intramuscular or subcutaneous injection $30 </span>
              </label>
            </div>
          </div>
        </div>
        <input className="newFormSubmit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default newForm
