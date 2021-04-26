import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BACK_END_USER_ACCOUNT, PROFILE_MANAGER } from '../../config/url-constants';
import Navbar from '../components/navbar';
import ArchiveModal from '../components/user_accounts/archive-modal';
import notFound from "./../../public/assets/images/CyberPik-logo.png";

const UserAccountView = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [location, setLocation] = useState("")
    const [profilePhoto, setProfilePhoto] = useState({})

    useEffect(() => {
        getUserAccount()
    }, [])

    const getUserAccount = () => {
        console.log("start load")
        axios.get(BACK_END_USER_ACCOUNT + '1').then(resp => {
            console.log(resp.data);
            setId(resp.data.userAccountId)
            setName(resp.data.userName)
            setEmail(resp.data.email)
            setLocation(resp.data.location)
            setProfilePhoto(resp.data.profilePhoto)
            console.log("end load");
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <Navbar />

            <div className="page-margin">
                <div className="breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                                <h2 className="title"><span>Review</span></h2>
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
                            <img src={(profilePhoto === null) ? notFound : profilePhoto.photoUrl} className="image" alt="profile_picture" />
                        </div>
                        {console.log(id)}
                        <br />
                        <h2 className="mb-4">{name}</h2>
                        <div className="mb-4">Email : {email}</div>
                        <div>{(location != null) && "location : " + location}</div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-button text-center col-6">
                            <button className="btn btn-custom btn-lg"><Link className="text-white" to={PROFILE_MANAGER}>Modify</Link></button>
                        </div>
                        <div className="form-button text-center col-6">
                            <button className="btn btn-custom btn-lg" data-toggle="modal" data-target="#archive">Archive</button>
                        </div>
                        <ArchiveModal userAccountId={id}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UserAccountView;