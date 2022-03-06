import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"

const ContactPage = () => {
  const [formRef, setFormRef] = React.useState(null)
  const [btnRef, setBtnRef] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [alert, setAlert] = React.useState(null)

  const handleOnSubmit = e => {
    e.preventDefault()

    setLoading(true)

    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.USER_ID,
      template_params: {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      },
    }

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POSt",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then(result => {
        setAlert({
          msg: "Your mail is sent!",
          type: "success",
        })
        btnRef.click()
        formRef.reset()
        setTimeout(() => {
          btnRef.click()
          setAlert(null)
        }, 5000)
        setLoading(false)
        console.log(result)
      })
      .catch(err => {
        setLoading(false)
        setAlert({
          msg: "Oooops! an error occur, please try again",
          type: "danger",
        })
        btnRef.click()
        setTimeout(() => {
          btnRef.click()
          setAlert(null)
        }, 5000)
        console.log(JSON.stringify(err))
      })
  }
  return (
    <Layout>
      <Seo title="Contact" />
      <div className="row justify-content-center align-items-center my-5">
        <div className="col-lg-6">
          <div className="mx-4">
            <h1 style={{ color: "#08fdd8" }}>Contact me</h1>
            <p className="mb-3">
              If you any request or question, don't hesitate to use the form.
            </p>
            <p>I'd love to hear from you.</p>
          </div>
          <div className="">
            <form
              onSubmit={handleOnSubmit}
              ref={ref => setFormRef(ref)}
              className="form shadow-none p-3 mb-5 rounded"
            >
              <div className="form-floating mb-3 bg-opacity-50">
                <input
                  type="text"
                  name="name"
                  className="form-control bg-light bg-opacity-25 border-0"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                  required
                />
                <label htmlFor="exampleFormControlInput1">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="email"
                  className="form-control bg-light bg-opacity-25 border-0"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="exampleFormControlInput1">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control bg-light bg-opacity-25 border-0"
                  id="exampleFormControlInput1"
                  placeholder="Have a project"
                  required
                />
                <label htmlFor="exampleFormControlInput1">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control bg-light bg-opacity-25 border-0"
                  name="message"
                  id="floatingTextarea"
                  style={{ height: 100 }}
                  placeholder="Leave a comment here"
                  required
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                <button
                  className="btn btn-lg my-btn"
                  type="submit"
                  disabled={loading}
                >
                  {loading && (
                    <span
                      className="spinner-border spinner-border-sm mx-2"
                      role="status"
                      style={{ color: "#08fdd8" }}
                    ></span>
                  )}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <StaticImage
            src="../images/undraw_contact_us.svg"
            layout="fullWidth"
            placeholder="tracedSVG"
            alt="Illustration Drawing for contact"
          />
        </div>
      </div>
      <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 11 }}>
        {alert && (
          <div
            className={`toast show align-items-center text-white bg-${alert?.type} border-0`}
            id="liveToast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">{alert?.msg}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={() => setAlert(null)}
              ></button>
            </div>
          </div>
        )}
      </div>
      <button
        ref={ref => setBtnRef(ref)}
        type="button"
        className="d-none"
        id="liveToastBtn"
        aria-label="toggle"
      ></button>
    </Layout>
  )
}

export default ContactPage
