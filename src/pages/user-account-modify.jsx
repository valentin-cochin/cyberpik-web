import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import { userAccountModifyInitialValues } from '../shared/initialValues';
import { userAccountModifyValidationSchema } from '../shared/validationSchemas';
import { UserName } from '../components/user_accounts/username';
import { Email } from '../components/user_accounts/email';
import { Password } from '../components/user_accounts/password';
import { ConfirmPassword } from '../components/user_accounts/confirm-password';
import Location from '../components/user_accounts/location';
import { EnableNewsletter } from '../components/user_accounts/enable-newsletter';
import { Link } from 'react-router-dom';
import { HOME_PAGE, PROFILE, SIGN_IN } from '../../config/url-constants';
import { axiosToken } from '../../config/axios-config';
import { logout } from '../components/user_accounts/logout';



const UserAccountModify = () => {

    const [location, setLocation] = useState()

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    })

    const submit = (values) => {
        axiosToken.patch('/user_accounts/', {
            userName: values.username,
            email: values.email,
            password: values.password,
            location: location,
            enableNewsletter: values.enableNewsletter
        }).then(res => {
            if (values.username !== "") {
                logout()
                window.location.replace(SIGN_IN)
            } else {
                window.location.replace(PROFILE)
            }
        }).catch(err => {
            if (!(err.response === undefined)) {
                logout()
                document.getElementById("error_message_user_account_modify").innerHTML = err.response.data
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