import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const Password = () => {

    return (
        <div className="form-group">
            <Field type="password" name="password" className="form-control" placeholder="Password" required="required" />
            <ErrorMessage componant="small" name="password" className="ml-5 mt-0 mb-3" />
        </div>
    )
}