import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { userAccountModifyInitialValues } from '../shared/initialValues';
import { userAccountModifyValidationSchema } from '../shared/validationSchemas';
import { UserName } from '../components/user_accounts/username';
import { Email } from '../components/user_accounts/email';
import { Password } from '../components/user_accounts/password';
import { ConfirmPassword } from '../components/user_accounts/confirm-password';
import Location from '../components/user_accounts/location';
import { EnableNewsletter } from '../components/user_accounts/enable-newsletter';
import { Link, useHistory } from 'react-router-dom';
import { BACK_END_USER_ACCOUNT, HOME_PAGE, PROFILE } from '../../config/url-constants';
import axios from 'axios';



const UserAccountModify = () => {

    const history = useHistory()
    const [location, setLocation] = useState("")

    const submit = (values) => {
        axios.patch(BACK_END_USER_ACCOUNT + '1', { //TODO: get the useraccountid in the authentication
            userName: values.username,
            email: values.email,
            password: values.password,
            location: location,
            enableNewsletter: values.enableNewsletter
        }).then(res => {
            history.pushState(PROFILE)
        }).catch(err => {
            if (err.response.status === 409) {
                document.getElementById("error_message_user_account_modify").innerHTML = err.response.data
            } else{
                console.log(err);
            }
        })
    }


    return (
        <section className="authentication-form">
            <div className="innerpage-decor">
                <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
            </div>

            <div>
                <h2 className="title text-center">Modify your account details</h2>
                <div className="card">

                    <Formik initialValues={userAccountModifyInitialValues}
                        onSubmit={submit}
                        validationSchema={userAccountModifyValidationSchema}>
                        <Form className="theme-form">
                            <UserName />
                            <Email />
                            <Password />
                            <ConfirmPassword />
                            <Location setLocation={setLocation} />
                            <EnableNewsletter />
                            <div id="error_message_user_account_modify" className="text-center mt-0 mb-3"></div>
                            <div className="form-button text-center">
                                <button type="submit" className="btn btn-custom theme-color">Submit</button>
                            </div>
                            <br />
                        </Form>
                    </Formik>
                    <div className="form-button text-center">
                        <button className="btn btn-custom theme-color"><Link className="text-white" to={HOME_PAGE}>Go back to the home page</Link></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UserAccountModify;