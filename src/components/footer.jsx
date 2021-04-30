import React from 'react';
import { GITHUB_ANTOINE, GITHUB_VALENTIN } from '../../config/url-constants';


const Footer = () => {


    return (
        <div>
            <section className="p-0">
                <div className="container-fluid">
                    <div className="bottom-section">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="address-bar">
                                    <div>
                                        <ul className="footer-style">
                                            <li>
                                                <div className="footer-icon">
                                                    <img src="assets/images/locate.png" alt="locate" />
                                                </div>
                                                <div className="footer-address">
                                                    <a href={null}>20 Rue du Luxembourg, 59100 Roubaix, France</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="footer-icon">
                                                    <img src="assets/images/fotter-email.png" alt="fotter-email" />
                                                </div>
                                                <div className="footer-address">
                                                    <a href={null}>support@cyberpik.com</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d631.8596552888489!2d3.1593013370550493!3d50.69324454464169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c328e2f9dd32f5%3A0x3b33b05842792807!2sAFPA!5e0!3m2!1sfr!2sfr!4v1618819751390!5m2!1sfr!2sfr" allowFullScreen className="md-height"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-section index-footer">
                <p>This app was made with <span role="img" aria-label="heart">❤️</span> by <a href={GITHUB_VALENTIN} target="_blank" rel="noopener noreferrer">Valentin Cochin</a> and <a href={GITHUB_ANTOINE} target="_blank" rel="noopener noreferrer">Antoine François</a></p>
            </div>
        </div>
    )
}


export default Footer