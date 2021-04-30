import React, { useEffect } from 'react';
import 'react-modal-video/scss/modal-video.scss';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';
import { IMPORT } from '../../config/url-constants';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Subscribe from '../components/subscribe';


// TODO: Add onClick to play button
const Home = () => {
    document.body.classList.add('home-style');
    document.body.classList.add('three');

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    return (
        <div>
            {/* Navbar Component*/}
            <Navbar />

            {/* Home Section Start */}
            <section id="home" className="home home-three vertical-scrolling">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-sm-12">
                            <div className="home-contain">
                                <div className="text-white">
                                    <div className="contain">
                                        <img src="assets/images/logo-icon-white.png" alt="Logo Cyberpik" />
                                        <h4>Enter into the future!</h4>
                                        <h1 className="text-white"><span className="f-bold">C</span>yber<span className="f-bold">P</span>ik</h1>
                                        <p className="slide-cap-desc">Play with your images. Glitch them, vaporwave them, cyberpunk them</p>
                                    </div>
                                    <div className="play-button">
                                        <Link className="popup-vimeo animated-circle" to={IMPORT}>
                                            <img src="assets/images/home2/play-button.png" alt="play-button" className="img-fluid"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="home-right">
                                <Tilt options={{ perspective: 110, speed: 400, max: 1.2, scale: 1 }}>
                                    <img src="assets/images/preview_transfo.jpg" className="img-fluid" alt="slider-caption" />
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Home Section End */}

            <Subscribe />

            <Footer />
        </div>
    );
}

export default Home;