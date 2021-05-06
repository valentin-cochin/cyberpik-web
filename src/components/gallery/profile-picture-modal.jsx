import React from 'react';
import { GALLERY } from '../../../config/url-constants';
import { axiosToken } from '../../../config/axios-config';

const ProfilePictureModal = ({imageId}) => {

    const handleClick = () => {
        axiosToken.patch('/user_accounts/profile_picture/' + imageId)
        .then(
            window.location.reload,
            window.location.replace(GALLERY)
        )
    }

    return (
        <div className="modal fade" id="profile-picture" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header justify-content-center">
                        <h5 className="modal-title">Are you sure you set this picture as profile picture?</h5>
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

export default ProfilePictureModal;