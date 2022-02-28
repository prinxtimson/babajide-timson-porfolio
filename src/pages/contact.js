import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/index.css"
import UndrawContact from "../images/undraw_contact_us.svg"

const ContactPage = () => {
  const formRef = React.useRef(null)

  const handleOnSubmit = e => {
    e.preventDefault()

    // emailjs
    // 	.sendForm(
    // 		process.env.REACT_APP_SERVICE_ID,
    // 		process.env.REACT_APP_TEMPLATE_ID,
    // 		e.target,
    // 		process.env.REACT_APP_USER_ID
    // 	)
    // 	.then(
    // 		result => {
    // 			formRef.current?.reset();

    // 			console.log(result.text);
    // 		},
    // 		error => {
    // 			console.log(error.text);
    // 		}
    // 	);
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
              ref={formRef}
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
                <button className="btn btn-lg my-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={UndrawContact} alt="Illustration Drawing for contact" />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
