import React from 'react';
import { HOME_PAGE } from '../../../config/url-constants';
import { axiosToken } from '../../../config/axios-config';
import { logout } from './logout';

const DeleteModal = () => {

    const handleClick = () => {
        axiosToken.delete('/user_accounts/')
        .then(
            logout(),
            window.location.replace(HOME_PAGE)
        )
    }

    return (
        <div className="modal fade" id="delete" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure you want to delete your account?</h5>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-custom btn-lg" data-dismiss="modal" onClick={handleClick}>YES</button>
                        <button type="button" className="btn btn-custom btn-lg" data-dismiss="modal">NO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;