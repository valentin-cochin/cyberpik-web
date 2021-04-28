import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { DOWNLOAD, GITHUB_ANTOINE, GITHUB_VALENTIN, IMPORT } from '../../config/url-constants';
import EffectCarousel from '../components/effect-carousel';


const Effect = () => {
    const location = useLocation()
    const history = useHistory()
    let imageId

    if (!location.state) {
        history.push(IMPORT)
    } else {
        imageId = location.state.imageId
    }

    console.log(imageId)

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
                            <EffectCarousel />
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
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around">
                            <div className="col-3">
                                <Link to={IMPORT} className="btn btn-custom btn-lg theme-color btn-back m-2"><i className="fa fa-angle-double-left mr-2"></i>Import</Link>
                            </div>
                            <div className="col-3">
                                <Link to={DOWNLOAD} className="btn btn-custom btn-lg theme-color btn-back m-2"><i className="fa fa-angle-double-right mr-2"></i>Transform</Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}


export default Effect