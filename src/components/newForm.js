import React, { useState, useEffect } from "react"
import emailjs from "emailjs-com"

const newForm = () => {
  const [checkbox, seCheckBox] = useState([
    { name: "Fatigue", id: 1, value: "Fatigue" },
    { name: "Fever", id: 2, value: "Fever" },
    { name: "Headache", id: 3, value: "Headache" },
    {
      name: "abdominal_pain",
      id: 4,
      value: "Nausea abdominal pain",
    },
    { name: "Weight", id: 5, value: "Weight change." },
    { name: "Vision", id: 6, value: "Vision problem" },
    { name: "Chest ", id: 7, value: "Chest pain" },
    {
      name: "Irregular",
      id: 8,
      value: "Irregular hear beat fainting",
    },
    { name: "Joint ", id: 9, value: "Joint pain" },
    { name: "Numbness", id: 11, value: "Numbness" },
    { name: "Stress", id: 12, value: "Stress" },
    { name: "Depression", id: 13, value: "Depression" },
    { name: "Rectal ", id: 14, value: "Rectal bleeding" },
    { name: "Blood ", id: 15, value: "Blood in urine" },
    { name: "Pregnant", id: 16, value: "Pregnant" },
  ])

  console.log(checkbox)

  const [firstName, setFirstName] = useState()
  const [lastName, setLastname] = useState()
  const [date, setDate] = useState()
  const [address, setAddress] = useState()
  const [phone, setPhone] = useState()

  const [email, setEmail] = useState("")
  const [emailDirty, setEmailDirty] = useState(false)
  const [emailError, setEmailError] = useState("Email is a required field")
  const [formValid, setFormValid] = useState(false)
  const emailHandler = e => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email")
    } else {
      setEmailError("")
    }
  }

  useEffect(() => {
    if (emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_mwmcak2",
        "template_18qrf1e",
        e.target,
        "user_UVUfWNWhv4kTBLfUHosjS"
      )
      .then(
        result => {
          console.log(result.text)

          setFirstName("")
          setLastname("")
          setPhone("")
          setAddress("")
          setEmail("")
          setDate("")
          seCheckBox([])
        },
        error => {
          console.log(error.text)
        }
      )
  }

  const blurHandler = e => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true)
        break
      default:
        break
    }
  }

  return (
    <div>
      <div>
        <form className="newForm container" onSubmit={sendEmail}>
          <div className="topNewForm">
            <label>
              <input
                className="newformInput"
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
              />
            </label>

            <label>
              <input
                className="newformInput"
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
              />
            </label>

            <label className="lastinput">
              <input
                className="newformInput"
                value={date}
                type="date"
                name="date"
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
                  name="address"
                  value={address}
                  placeholder="Address"
                />
              </label>

              <label className="newformInput">
                {emailDirty && emailError && (
                  <div
                    style={{
                      color: "red",
                      position: "relative",
                      bottom: "-95px",
                    }}
                  >
                    {emailError}
                  </div>
                )}
                <input
                  onChange={e => emailHandler(e)}
                  value={email}
                  placeholder="E-mail"
                  onBlur={e => blurHandler(e)}
                  className="newformInput"
                  name="email"
                  type="email"
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
                  value={phone}
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
                  {checkbox.slice(0, 8).map(({ name, id, value }) => (
                    <label key={id}>
                      <input type="checkbox" name={name} value={value} />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>

                <div className="symptomsRight">
                  {checkbox.slice(8, 16).map(({ name, id, value }) => (
                    <label key={id}>
                      <input type="checkbox" name={name} value={value} />
                      <span>{value}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="serviceInterestedForm">
              <h3>Service interested in</h3>
              <div className="serviceInterestedForm_inner">
                <label>
                  <input
                    type="checkbox"
                    name="IV_Infusion"
                    value="IV Infusion"
                  />
                  <span>IV Infusion </span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="Microneedling"
                    value="Microneedling"
                  />
                  <span>Microneedling </span>
                </label>

                <label>
                  <input type="checkbox" name="PRP" value="PRP" />
                  <span>PRP</span>
                </label>

                <label>
                  <input type="checkbox" name="BOTOX" value="Botox" />
                  <span>Botox</span>
                </label>
              </div>
            </div>
            <div className="packagesForm">
              <h3>Packages</h3>

              <div className="packagesForm_inner">
                <label>
                  <input
                    type="checkbox"
                    name="I Vitamin"
                    value="I Vitamin B 12 intramuscular injection $30"
                  />
                  <span>I Vitamin B 12 intramuscular injection $30 </span>
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="Bit D3"
                    value="Bit D3 intramuscular or subcutaneous injection $30"
                  />
                  <span>
                    Bit D3 intramuscular or subcutaneous injection $30{" "}
                  </span>
                </label>
              </div>
            </div>
          </div>
          <input
            disabled={!formValid}
            className="newFormSubmit"
            type="submit"
            value="Submit"
          />
          <div className="newFormIconBlock">
            <span className="newFormIcon"></span>
            <p>Email to us ensuring it is all secure and encrypted info.</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default newForm
