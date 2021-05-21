import axios from "axios";
import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { ConfirmPassword } from "../components/user_accounts/confirm-password";
import { Password } from "../components/user_accounts/password";
import { resetPasswordInitialValues } from "../shared/initialValues";
import { BACK_END_URL, SIGN_IN } from "../shared/url-constants";
import { resetPasswordValidationSchema } from "../shared/validationSchemas";
import { useLocation } from "react-router-dom";


const ResetPassword = (props) => {
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  });

  const submit = (values) => {
    console.log(token);
    axios.post(BACK_END_URL + "/password/save", {
      password: values.password,
      token: token
    }).then(res =>
      window.location.replace(SIGN_IN)
    ).catch(err =>
      console.log(err)
    )
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
            initialValues={resetPasswordInitialValues}
            onSubmit={submit}
            validationSchema={resetPasswordValidationSchema}
          >
            <Form className="theme-form">
              <div className="form-group">
                <Password />
              </div>
              <div className="form-group">
                <ConfirmPassword />
              </div>

              <div className="form-button text-center">
                <button type="submit" className="btn btn-custom theme-color">
                  Done
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
