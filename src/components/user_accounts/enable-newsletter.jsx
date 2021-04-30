import React from 'react';
import { ErrorMessage, Field } from 'formik';

export const EnableNewsletter = () => {

    return (
        <div className="form-group row">
            <div className="custom-control custom-checkbox">
                <Field type="checkbox" name="enableNewsletter" className="custom-control-input" id="newsletter" />
                <label className="custom-control-label" for="newsletter">Subscribe to the Newsletter</label>
                <ErrorMessage componant="small" name="newsletter" className="ml-5 mt-0 mb-3" />
            </div>
        </div>
    )
}