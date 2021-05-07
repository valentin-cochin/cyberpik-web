import React from 'react';
import { PHOTO_DETAILS, SIGN_IN } from '../../../config/url-constants';
import { axiosToken } from '../../../config/axios-config';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { photoDetailsModifyValidationSchema } from '../../shared/validationSchemas';
import { photoDetailsModifyInitialValues } from '../../shared/initialValues';
import { logout } from '../user_accounts/logout';
import { useHistory } from 'react-router';

const ModifyModal = ({imageId}) => {
    const history = useHistory();


    const submit = (values) => {
        axiosToken.patch('/images/details/' + imageId, {
            title: values.title
        }).then(
            setTimeout(() => {
                window.location.replace(PHOTO_DETAILS)
            }, 500)
        ).catch(err => {
            logout()
            history.push(SIGN_IN)
        })
    }

    return (
        <div className="modal fade" id="modify" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <h5 className="modal-title">Modify the photo details :</h5>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <Formik initialValues={photoDetailsModifyInitialValues}
                        onSubmit={submit}
                        validationSchema={photoDetailsModifyValidationSchema}>
                            <Form className="theme-form">
                                <Field type="text" name="title" className="form-control" placeholder="Title"></Field>
                                <ErrorMessage componant="small" name="username" className="ml-5 mt-0 mb-3" />
                                <div className="form-button text-center">
                                    <button type="submit" className="btn btn-custom theme-color mt-2">Submit</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifyModal;