import React, { useState, useEffect } from "react"

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

  // const [firstName, setFirstName] = useState()
  // const [lastname, setLastname] = useState()
  // const [wouldyoulike, setWouldYouLike] = useState()
  // const [howDid, setHoWdid] = useState()

  // const [email, setEmail] = useState("")
  // const [emailDirty, setEmailDirty] = useState(false)
  // const [emailError, setEmailError] = useState("Email is a required field")
  // const [formValid, setFormValid] = useState(false)
  // const [phone, setPhone] = useState()
  // const history = useHistory()
  // const emailHandler = e => {
  //   setEmail(e.target.value)
  //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //   if (!re.test(String(e.target.value).toLowerCase())) {
  //     setEmailError("Incorrect email")
  //   } else {
  //     setEmailError("")
  //   }
  // }

  // useEffect(() => {
  //   if (emailError) {
  //     setFormValid(false)
  //   } else {
  //     setFormValid(true)
  //   }
  // }, [emailError])

  // function sendEmail(e) {
  //   e.preventDefault()

  //   emailjs
  //     .sendForm(
  //       "service_mw3qmm3",
  //       "template_4329ukk",
  //       e.target,
  //       "user_iw2a3XOS7O7HrGbR8S31M"
  //     )
  //     .then(
  //       result => {
  //         console.log(result.text)
  //         setFirstName("")
  //         setLastname("")
  //         setPhone("")
  //         setEmail("")
  //         setWouldYouLike("")
  //         setHoWdid("")
  //         history.push("/thankyou")
  //       },
  //       error => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  // const blurHandler = e => {
  //   switch (e.target.name) {
  //     case "email":
  //       setEmailDirty(true)
  //       break
  //     default:
  //       break
  //   }
  // }

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
              type="date"
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
                name="email"
                type="email"
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
                name="phone"
                value=""
                placeholder="Phone"
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
