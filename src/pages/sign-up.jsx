import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'


const SignUp = () => {

   const initialValues = {
      //TODO : Fill the initialValues
   }

   const validationSchema = yup.object().shape({
      //TODO : Set the validationSchema
   })

   const handleSubmit = (values) => {
      //TODO : Set the onSubmit
   }



   return (
      <section className="authentication-form">
         <div className="innerpage-decor">
            <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
            <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
         </div>
         <div>
            <h2 className="title text-center">It's Free<span> Join US</span></h2>
            <p className="text-center">Welcome to <span>CYBERPIK</span>, Please join us with your personal account information.</p>
            <div className="card">
               <Formik initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}>
                  <Form className="theme-form">
                     <div className="form-group">
                        <Field type="text" name="username" className="form-control" placeholder="Username" required="required" />
                        <ErrorMessage componant="small" name="username" className="ml-2" />
                     </div>
                     <div className="form-group">
                        <Field type="email" name="email" className="form-control" placeholder="Email Address" required="required" />
                        <ErrorMessage componant="small" name="email" className="ml-2" />

                     </div>
                     <div className="form-group">
                        <Field type="password" name="password" className="form-control" placeholder="Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                        <ErrorMessage componant="small" name="password" className="ml-2" />
                     </div>
                     <div className="form-group">
                        <Field type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                        <ErrorMessage componant="small" name="confirm_password" className="ml-2" />

                     </div>
                     <div className="form-group">
                        <Field type="text" name="country" className="form-control" placeholder="Country" />
                        <ErrorMessage componant="small" name="country" className="ml-2" />
                     </div>
                     <div className="form-group">
                        <Field type="text" name="city" className="form-control" placeholder="City" />
                        <ErrorMessage componant="small" name="city" className="ml-2" />
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <Field type="checkbox" name="newsletter" className="custom-control-input" id="newsletter" />
                           <ErrorMessage componant="small" name="newsletter" className="ml-2" />
                           <label className="custom-control-label" for="newsletter">Subscribe to the Newsletter</label>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <Field type="checkbox" name="conditions" className="custom-control-input" id="conditions" />
                           <ErrorMessage componant="small" name="conditions" className="ml-2" />
                           <label className="custom-control-label" for="conditions"><a href={`${process.env.PUBLIC_URL}/ //TODO : Link to the conditions page`}
                              className="text-right theme-link">Accept the Conditions</a></label>
                        </div>
                     </div>
                     <div className="form-button text-center">
                        <button type="submit" className="btn btn-custom theme-color">Sign Up</button>
                     </div>
                     <div className="or-saparator"><span>or</span></div>
                     <h6 className="text-center mt-0 mb-3">Sign up with:</h6>
                     <div className="form-button text-center social-btns">
                        <button type="submit" className="btn btn-custom fb">Facebook</button>
                        <button type="submit" className="btn btn-custom ggl">Google</button>
                     </div>
                  </Form>
               </Formik>
            </div>
         </div>
      </section>
   );
}

export default SignUp;