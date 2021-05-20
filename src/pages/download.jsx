import FileSaver from 'file-saver';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { GITHUB_ANTOINE, GITHUB_VALENTIN, HOME_PAGE, IMPORT } from '../shared/url-constants';

const Download = () => {
    const [transformedImage, setTransformedImage] = useState(0)
    const location = useLocation()
    const history = useHistory()

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    useEffect(() => {
        if (!location.state) {
            history.push(IMPORT)
        } else {
            setTransformedImage(location.state.transformedImage)
            if (transformedImage !== 0) {
                FileSaver.saveAs(new Blob([transformedImage.blob]), "tranformed_image.jpg")
            }
        }
    }, [location.state, history, transformedImage])

    return (
        <section className="authentication-form download">
            <div className="innerpage-decor">
                <div className="innerpage-circle1"><img src="../assets/images/Testimonial2.png" alt="" /></div>
                <div className="innerpage-circle2"><img src="../assets/images/Testimonial1.png" alt="" /></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <img src="../assets/images/down.png" className="img-fluid downlod-img" alt="" />
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Your download should begin automatically</h2>
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
                                <div className="form-button text-center">
                                    <Link to={HOME_PAGE} className="btn btn-custom btn-lg theme-color btn-back"><i className="fa fa-angle-double-left mr-2"></i>Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}


export default Download;