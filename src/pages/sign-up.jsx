import React from 'react';
import formik from 'formik';
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
               <formik initialValues={initialValues}
                  onSubmit={handleSubmit}
                  validationSchema={validationSchema}>
                  <form className="theme-form">
                     <div className="form-group">
                        <div className="md-fgrup-margin">
                           <input type="text" className="form-control" placeholder="UserName" required="required" />
                        </div>
                     </div>
                     <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" required="required" />
                     </div>
                     <div className="form-group">
                        <input required="" type="password" className="form-control" placeholder="Password" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                     </div>
                     <div className="form-group">
                        <input type="password" name="login[password]" className="form-control" placeholder="Confirm Password" required="required" />
                        <div className="show-hide">
                           <span className="show"></span>
                        </div>
                     </div>
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="Country" required="required" />
                     </div>
                     <div className="form-group">
                        <input type="text" className="form-control" placeholder="City" required="required" />
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="newsletter" />
                           <label className="custom-control-label" for="newsletter">Subscribe to the Newsletter</label>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="custom-control custom-checkbox">
                           <input type="checkbox" className="custom-control-input" id="conditions" />
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
                  </form>
               </formik>
            </div>
         </div>
      </section>
   );
}

export default SignUp;