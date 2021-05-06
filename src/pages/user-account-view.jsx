import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { axiosToken } from '../../config/axios-config';
import { PROFILE_MANAGER, SIGN_IN } from '../../config/url-constants';
import Navbar from '../components/navbar';
import ArchiveModal from '../components/user_accounts/archive-modal';
import DeleteModal from '../components/user_accounts/delete-modal';
import { logout } from '../components/user_accounts/logout';
import notFound from "./../../public/assets/images/CyberPik-logo.png";

const UserAccountView = () => {

    const history = useHistory()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [profilePhotoId, setProfilePhotoId] = useState(0)
    const [profilePhoto, setProfilePhoto] = useState({})

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    })

    useEffect(() => {
        getUserAccount()
    }, [])

    const getUserAccount = () => {
        axiosToken.get('/user_accounts/').then(resp => {
            setName(resp.data.userName)
            setEmail(resp.data.email)
            setLocation(resp.data.location)
            getProfilePicture(resp.data.profilePhoto.photoId)
        }).catch(err => {
            logout()
            history.push(SIGN_IN)
        })
    }

    const getProfilePicture = (id) => {
        if(id !== 0){
            axiosToken
            .get("/images/" + id, { responseType: "arraybuffer" })
            .then((response) => {
                const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                )
                );
                setProfilePhoto({ source: "data:;base64," + base64 });
            }).catch(err => {
                logout()
                history.push(SIGN_IN)
            })
        }
      };


    return (
        <div>
            <Navbar />

            <div className="page-margin">
                <div className="breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                                <h2 className="title"><span>Profile</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="team" className="team authentication-form">
                <div className="team-decor">
                    <div className="team-circle1"><img src="assets/images/team1.png" alt="" /></div>
                    <div className="team-circle2"><img src="assets/images/team3.png" alt="" /></div>
                    <div className="team-circle3"><img src="assets/images/team.png" alt="" /></div>
                </div>

                <div className="review-box">
                    <div id="overlay theme-form">
                        <div className="mx-auto image mb-5">
                            <img src={(profilePhoto === null) ? notFound : profilePhoto.source} className="image" alt="profile_picture" />
                        </div>
                        <br />
                        <h2 className="mb-4">{name}</h2>
                        <div className="mb-4">Email : {email}</div>
                        <div>{(location != null) && "location : " + location}</div>
                    </div>
                    <br />
                    <div className="row justify-content-around">
                        <div className="form-button text-center col-6">
                            <button className="btn btn-custom btn-lg"><Link className="text-white" to={PROFILE_MANAGER}>Modify</Link></button>
                        </div>
                        <div className="form-button text-center col-6">
                            <button className="btn btn-custom btn-lg" data-toggle="modal" data-target="#archive">Archive</button>
                        </div>
                        <ArchiveModal />
                        <div className="form-button text-center col-6 mt-3">
                            <button className="btn btn-custom btn-lg" data-toggle="modal" data-target="#delete">Delete</button>
                        </div>
                        <DeleteModal />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserAccountView;