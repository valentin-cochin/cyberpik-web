import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { BACK_END_USER_ACCOUNT, HOME_PAGE } from '../../../config/url-constants';

const DeleteModal = (id) => {
    const history = useHistory()

    const handleClick = () => {
        axios.delete(BACK_END_USER_ACCOUNT + "1")
        .then(
            history.push(HOME_PAGE)
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
                        <button type="button" className="btn btn-custom btn-lg" onClick={handleClick}>YES</button>
                        <button type="button" className="btn btn-custom btn-lg" data-dismiss="modal">NO</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;