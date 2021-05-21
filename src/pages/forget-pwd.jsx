import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Email } from "../components/user_accounts/email";
import { forgetPasswordInitialValues } from "../shared/initialValues";
import { BACK_END_URL, FRONT_END_URL, RESET_PASSWORD } from "../shared/url-constants";
import { forgetPasswordValidationSchema } from "../shared/validationSchemas";


const ForgetPassword = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  });

  const submit = (values) => {
    axios.post(BACK_END_URL + "/password/request", {
      email: values.email,
      url: FRONT_END_URL + RESET_PASSWORD
    }).then(res =>
      document.getElementById("forget_password_message").innerHTML = "an email has been sent"
    ).catch(err => {
      if (err !== null) {
        console.log(err);
     }
    })
  };

  return (
    <section className="authentication-form">
      <div className="innerpage-decor">
        <div className="innerpage-circle1">
          <img src="../assets/images/Testimonial2.png" alt="" />
        </div>
        <div className="innerpage-circle2">
          <img src="../assets/images/Testimonial1.png" alt="" />
        </div>
      </div>

      <div>
        <h2 className="title text-center">
          RESET YOUR<span> PASSWORD</span>
        </h2>
        <div className="card">
          <Formik
            initialValues={forgetPasswordInitialValues}
            onSubmit={submit}
            validationSchema={forgetPasswordValidationSchema}
          >
            <Form className="theme-form">
              <div className="form-group mt-2">
                <h6 className="mt-0 mb-3">Enter Your Email Address :</h6>
                <div className="form-row">
                  <div className="col-12">
                    <Email />
                  </div>
                  <div id="forget_password_message" className="text-center mt-0 mb-3"></div>
                  <div className="col-12 mt-4">
                    <button
                      type="submit"
                      className="btn btn-custom btn-block theme-color"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
