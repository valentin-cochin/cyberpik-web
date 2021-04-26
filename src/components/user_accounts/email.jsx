import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const Email = () => {

    return (
        <div className="form-group">
            <Field type="email" name="email" className="form-control" placeholder="Email Address" />
            <ErrorMessage componant="small" name="email" className="ml-5 mt-0 mb-3" />
        </div>
    )
}