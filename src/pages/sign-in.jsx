import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { BACK_END_USER_ACCOUNT, FORGET_PASSWORD, HOME_PAGE, SIGN_UP } from '../../config/url-constants';
import { Email } from '../components/user_accounts/email';
import { Password } from '../components/user_accounts/password';
import { signInInitialValues } from '../shared/initialValues';
import { signInValidationSchema } from '../shared/validationSchemas';


const SignIn = () => {
const history = useHistory()

const submit = (values) => {
   axios.post(BACK_END_USER_ACCOUNT + 'login', {
      email: values.email,
      password: values.password
   }).then(res => {
      history.push(HOME_PAGE)
   }).catch(err => {
      document.getElementById("error_message_sign_in").innerHTML = err.response.data
   })

}

return (
   <section className="authentication-form">
      <div className="innerpage-decor">
         <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
         <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
      </div>
      <div>
         <h2 className="title text-center"><span>Login</span></h2>
         <p className="text-center">Welcome to <span>CYBERPIK</span>, Please Login with your personal account information.</p>
         <div className="card">

            <Formik initialValues={signInInitialValues}
               onSubmit={submit}
               validationSchema={signInValidationSchema}>
               <Form className="theme-form">
                  <Email />
                  <Password />
                  <div className="form-group row">
                     <div className="custom-control custom-checkbox col-6">
                        <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                        <label className="custom-control-label" htmlFor="customControlAutosizing">Remember me</label>
                     </div>
                     <a href={FORGET_PASSWORD} className="text-right col-6 theme-link">lost your password</a>
                  </div>
                  <div id="error_message_sign_in" className="text-center mt-0 mb-3"></div>
                  <div className="form-button text-center">
                     <button type="submit" className="btn btn-custom btn-lg theme-color">Login</button>
                  </div>
                  <br />
               </Form>
            </Formik>
            <div className="form-button text-center">
               <button className="btn btn-custom theme-color"><Link className="text-white" to={SIGN_UP}>You don't have an account yet?</Link></button>
            </div>

            <div className="or-saparator"><span>or</span></div>
            <h6 className="text-center mt-0 mb-3">Sign in with:</h6>
            <div className="form-button text-center social-btns">
               <button type="submit" className="btn btn-custom fb">Facebook</button>
               <button type="submit" className="btn btn-custom ggl">Google</button>
            </div>
         </div>
      </div>
   </section>
);
}


export default SignIn;