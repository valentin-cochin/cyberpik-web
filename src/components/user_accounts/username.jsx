import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const UserName = () => {

    return (
        <div className="form-group">
            <Field type="text" name="username" className="form-control" placeholder="Username" required="required" />
            <ErrorMessage componant="small" name="username" className="ml-5" />
        </div>
    )
}