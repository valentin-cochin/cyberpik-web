import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';


const SignUp = () => {

   const initialValues = {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
      enableNewsletter: false
   }

   const yup = require('yup')
   require('yup-password')(yup)
   const validationSchema = yup.object().shape({
      username: yup.string().required("username is required").min(3, "username must be at least 3 characters").max(20, "username must be at least 21 characters"),
      email: yup.string().required("e-mail is required").email("e-mail is not valid"),
      password: yup.string().required("password is required").password(),
      confirm_password: yup.string().required("confirmation password is required").oneOf([yup.ref("password"), null], "passwords must be the same"),
      enableNewsletter: yup.bool().notRequired(),
      conditions: yup.bool().test("consent", "you have to accept our terms and conditions", value => value === true).required("you have to accept our terms and conditions")
   })

   const submit = (values) => {
      console.log("Submit the form")
      axios.post("http://localhost:8080/cyberpik/user_accounts/", {
         userName: values.username,
         email: values.email,
         password: values.password,
         enableNewsletter: values.enableNewsletter
      }).then(
         console.log("data sent to the back")
      )
   }



   return (
      <section className="authentication-form">
         {console.log("Load the page")}
         <div className="innerpage-decor">
            <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
            <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
         </div>
         <div>
            <h2 className="title text-center">It's Free<span> Join US</span></h2>
            <p className="text-center">Welcome to <span>CYBERPIK</span>, Please join us with your personal account information.</p>
            <div className="card">
               <Formik initialValues={initialValues}
                  onSubmit={submit}
                  validationSchema={validationSchema}>
                  <Form className="theme-form">
                     <div className="form-group">
                        <Field type="text" name="username" className="form-control" placeholder="Username" required="required" />
                        <ErrorMessage componant="small" name="username" className="ml-5" />
                     </div>
                     <div className="form-group">
                        <Field type="email" name="email" className="form-control" placeholder="Email Address" required="required" />
                        <ErrorMessage componant="small" name="email" className="ml-5" />

                     </div>
                     <div className="form-group">
                        <Field type="password" name="password" className="form-control" placeholder="Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                        <ErrorMessage componant="small" name="password" className="ml-5" />
                     </div>
                     <div className="form-group">
                        <Field type="password" name="confirm_password" className="form-control" placeholder="Confirmation Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                        <ErrorMessage componant="small" name="confirm_password" className="ml-5" />
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <Field type="checkbox" name="enableNewsletter" className="custom-control-input" id="newsletter" />
                           <label className="custom-control-label" for="newsletter">Subscribe to the Newsletter</label>
                           <ErrorMessage componant="small" name="newsletter" className="ml-5" />
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <Field type="checkbox" name="conditions" className="custom-control-input" id="conditions" />
                           <label className="custom-control-label" for="conditions"><a//TODO : Link to the conditions page(modal?)
                              className="text-right theme-link">Accept Terms & Conditions</a></label><br/>
                              <ErrorMessage componant="small" name="conditions" className="ml-5" />
                        </div>
                     </div>
                     <div className="form-button text-center">
                        <button type="submit" className="btn btn-custom theme-color">Sign Up</button>
                     </div>
                  </Form>
               </Formik>
               <div className="or-saparator"><span>or</span></div>
               <h6 className="text-center mt-0 mb-3">Sign up with:</h6>
               <div className="form-button text-center social-btns">
                  <button type="submit" className="btn btn-custom fb">Facebook</button>
                  <button type="submit" className="btn btn-custom ggl">Google</button>
               </div>
            </div>
         </div>
      </section>
   );
}

export default SignUp;