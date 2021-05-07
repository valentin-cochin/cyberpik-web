import React, { useEffect, useState } from 'react';
import { axiosToken } from '../../config/axios-config';
import { PhotosList } from '../components/gallery/photos-list';
import Navbar from '../components/navbar';
import { logout } from '../components/user_accounts/logout';
import { useHistory } from 'react-router';
import { IMPORT, SIGN_IN } from '../../config/url-constants';
import { Link } from 'react-router-dom';



const Gallery = () => {

    const history = useHistory()

    const [imagesId, setImagesId] = useState([])

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    },[])

    useEffect(() => {
        axiosToken.get('/images/').then(resp =>{
            setImagesId(resp.data)
        }).catch(err => {
            logout()
            history.push(SIGN_IN)
        })
    },[])


        return (
            <div>
                <Navbar />
                <div className="page-margin">
                    <div className="breadcrumb-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                                    <h2 className="title"><span>Gallery</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="authentication-form download">
                        <div className="innerpage-decor">
                            <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                            <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
                        </div>

                        <div className="container">
                            <div className="row">
                                {imagesId.length !== 0 && <PhotosList imagesId={imagesId}/>}
                                {imagesId.length === 0 && <Link className="col-md-12 text-center" to={IMPORT}><h1>ADD YOUR FIRST PHOTO</h1></Link>}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
}


export default Gallery