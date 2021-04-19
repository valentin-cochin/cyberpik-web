import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpInitialValues } from '../shared/initialValues'
import { signUpValidationSchema } from '../shared/validationSchemas';
import { UserName } from '../components/user_accounts/username';
import { Email } from '../components/user_accounts/email';
import { Password } from '../components/user_accounts/password';
import { ConfirmPassword } from '../components/user_accounts/confirm-password';
import { EnableNewsletter } from '../components/user_accounts/enable-newsletter';
import { TermsConditions } from '../components/user_accounts/terms-conditions';
import { BACK_END_URL, USER_ACCOUNT_URL } from '../../config/api-user-paths'


const SignUp = () => {

   const submit = (values) => {
      axios.post(BACK_END_URL + USER_ACCOUNT_URL, {
         userName: values.username,
         email: values.email,
         password: values.password,
         enableNewsletter: values.enableNewsletter
      })
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

               <Formik initialValues={signUpInitialValues}
                  onSubmit={submit}
                  validationSchema={signUpValidationSchema}>
                  <Form className="theme-form">
                     <UserName />
                     <Email />
                     <Password />
                     <ConfirmPassword />
                     <EnableNewsletter />
                     <TermsConditions />
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