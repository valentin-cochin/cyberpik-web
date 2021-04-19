import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const TermsConditions = () => {

    return (
        <div className="form-group row">
            <div className="custom-control custom-checkbox">
                <Field type="checkbox" name="conditions" className="custom-control-input" id="conditions" />
                <label className="custom-control-label" for="conditions"><a//TODO : Link to the conditions page(modal?)
                    className="text-right theme-link">Accept Terms and Conditions</a></label><br />
                <ErrorMessage componant="small" name="conditions" className="ml-5" />
            </div>
        </div>
    )
}