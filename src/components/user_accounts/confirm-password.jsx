import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const ConfirmPassword = () => {

    return (
        <div className="form-group">
            <Field type="password" name="confirm_password" className="form-control" placeholder="Confirmation Password" />
            <ErrorMessage componant="small" name="confirm_password" className="ml-5 mt-0 mb-3" />
        </div>
    )
}