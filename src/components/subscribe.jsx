import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Email } from "./user_accounts/email";
import { subscribeUnsubscribeInitialValues } from "../shared/initialValues";
import { subscribeUnsubscribeValidationSchema } from "../shared/validationSchemas";
import axios from "axios";
import { BACK_END_URL } from "../shared/url-constants";

const Subscribe = () => {
  useEffect(() => {
    setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }, []);

  const submit = (values) => {
    axios.post(BACK_END_URL + "/newsletters/subscribe", {
      email: values.email
    }).then(resp => {
      document.getElementById(
              "message_newsletter_email"
            ).innerHTML = "You subscribed to the newsletter"
    }).catch(err =>
      document.getElementById(
              "message_newsletter_email"
            ).innerHTML = err.response.data
    )
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="footer-text">
              <img src="../assets/images/email.png" alt="email" />
              <h2 className="title text-center md-margin-top">
                subscribe to our <span>newsletter</span>
              </h2>
              <p>
                Receive our latest news and be the first to be notified of our
                new features. You can unsuscribe anytime you want.
              </p>
              <Formik
                initialValues={subscribeUnsubscribeInitialValues}
                onSubmit={submit}
                validationSchema={subscribeUnsubscribeValidationSchema}
              >
                <Form className="footer-form needs-validation">
                  	<Email />
                    <div id="message_newsletter_email"
                    className="text-center mt-0 mb-3">
                  </div>
					<div className="form-button text-center">
						<button type="submit" className="btn btn-custom theme-color mt-2">Submit</button>
					</div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
