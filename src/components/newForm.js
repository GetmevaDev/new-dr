import React from "react"

const newForm = () => {
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
          <h3>Symptoms</h3>
          <h3>Service interested in</h3>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default newForm
