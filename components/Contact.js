import Image from "next/image"
import emailicon from "../public/images/email-icon.svg"
import { useState } from "react"

export const Contact = () => {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("Not Provided")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [mailfail, setMailFail] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name,
      subject,
      email,
      phone,
      message,
    }

    fetch("https://fahimzada.com/api/contact.php", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setMailFail(true)
      }
    })
  }

  return (
    <div id="contact">
      <form className="my-form" onSubmit={handleSubmit}>
        <div className="contact-container">
          <h2>GET IN TOUCH!</h2>
          <ul>
            <li>
              <div className="grid grid-2">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  autoComplete="off"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  autoComplete="off"
                  onChange={(e) => {
                    setSubject(e.target.value)
                  }}
                />
              </div>
            </li>
            <li>
              <div className="grid grid-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                  z
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone +92..."
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                />
              </div>
            </li>
            <li>
              <textarea
                placeholder="Message"
                autoComplete="off"
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
              ></textarea>
            </li>
            <li>
              <div className="grid grid-3">
                <button className="btn-grid" type="submit">
                  <span className="back">
                    <Image src={emailicon} width={24} height={24} alt="email sending icon" />
                  </span>
                  <span className="front">SUBMIT</span>
                </button>
                {submitted ? <p className="success">Message have been sent! :) </p> : ""}
                {mailfail ? <p className="error">Opps something went wrong! :(</p> : ""}
              </div>
            </li>
          </ul>
        </div>
      </form>
      <div>
        <div className="divider div-contact">{"</contact>"}</div>
      </div>
    </div>
  )
}
