import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Email } from "../components/user_accounts/email";
import { subscribeUnsubscribeInitialValues } from "../shared/initialValues";
import { subscribeUnsubscribeValidationSchema } from "../shared/validationSchemas";
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import { BACK_END_URL, HOME_PAGE } from "../../config/url-constants";

const Unsubscribe = () => {

	const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }, []);

  const submit = (values) => {
	axios.delete(BACK_END_URL + "/newsletters/unsubscribe", { data : {
		email: values.email
	}})
	.then( resp => {
		document.getElementById(
            "message_newsletter_email"
          ).innerHTML = "You unsubscribed from the newsletter"
          setTimeout(() => {
            history.push(HOME_PAGE)
          }, 2000)
 	})
	.catch(err =>
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
              <img src="assets/images/email.png" alt="email" />
              <h2 className="title text-center md-margin-top">
                Are you sure you want to unsubscribe from our <span>newsletter</span>
              </h2>
              <p>
                To unsubscribe from our newsletter, please enter your email address & submit
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
						<button type="submit" className="btn btn-custom theme-color mb-5 mt-2">Submit</button>
					</div>
                </Form>
              </Formik>
			  <Link to={HOME_PAGE}>Back to the HomePage</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unsubscribe;
