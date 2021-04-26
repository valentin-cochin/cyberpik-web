import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DOWNLOAD, GITHUB_ANTOINE, GITHUB_VALENTIN, IMPORT } from '../../config/url-constants';


const Effect = () => {
    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    return (
        <section className="authentication-form download">
            <div className="innerpage-decor">
                <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <i className="fa fa-magic" aria-hidden="true" style={{ fontSize: "10rem", color: "#777777" }}></i>
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Choose the effect</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-section">
                                    <p>This app was made with <span role="img" aria-label="heart">❤️</span> by <a href={GITHUB_VALENTIN} target="_blank" rel="noopener noreferrer">Valentin Cochin</a> and <a href={GITHUB_ANTOINE} target="_blank" rel="noopener noreferrer">Antoine François</a></p>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-3">
                                        <Link to={IMPORT} className="btn btn-custom btn-lg theme-color btn-back"><i className="fa fa-angle-double-left mr-2"></i>Back to import</Link>
                                    </div>
                                    <div className="col-3">
                                        <Link to={DOWNLOAD} className="btn btn-custom btn-lg theme-color btn-back"><i className="fa fa-angle-double-right mr-2"></i>Tranform the image</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}


export default Effect