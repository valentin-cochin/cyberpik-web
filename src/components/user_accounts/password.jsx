import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const Password = () => {

    return (
        <div className="form-group">
            <Field type="password" name="password" className="form-control" placeholder="Password" required="required" />
            <div className="show-hide">
                <span className="show"></span>
            </div>
            <ErrorMessage componant="small" name="password" className="ml-5" />
        </div>
    )
}