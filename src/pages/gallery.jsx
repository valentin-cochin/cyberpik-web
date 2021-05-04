import React, { useEffect, useState } from 'react';
import { axiosToken } from '../../config/axios-config';
import { PhotosList } from '../components/photos-list';
import Navbar from '../components/navbar';



const Gallery = () => {

    const [imagesId, setImagesId] = useState(0)

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    },[])

    useEffect(() => {
        axiosToken.get('images/').then(resp =>{
            setImagesId(resp.data)
        }).catch(err => {
            console.log(err);
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
                                {imagesId !== 0 && <PhotosList imagesId={imagesId}/>}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
}


export default Gallery