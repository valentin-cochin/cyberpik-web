import React, { useEffect, useState } from 'react';
import { GALLERY, GENERAL_CONDITIONS, HOME_PAGE, PROFILE, PROJECT_PRESENTATION, SIGN_IN } from '../shared/url-constants';
import { logout } from './user_accounts/logout';

const Navbar = () => {


    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    })

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setIsAuthenticated(true);
        }
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
            <div id="navbar-main" className="container">
                <a className="navbar-brand" href={HOME_PAGE}><img src="../assets/images/logo.png" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto" id="mymenu">
                        <li className="nav-item">
                            <a className="nav-link" href={HOME_PAGE}>Home</a>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <a className="nav-link" href={GALLERY}>gallery</a>
                            </li>
                        )}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">about</a>
                            <ul className="dropdown-menu">
                                <li className="nav-item"><a className="nav-link" href={PROJECT_PRESENTATION}>Project presentation</a></li>
                                <li className="nav-item"><a className="nav-link" href={GENERAL_CONDITIONS}>General Conditions</a></li>
                            </ul>
                        </li>

                        {isAuthenticated && (
                            <li className="nav-item">
                                <a className="nav-link" href={PROFILE}>profile</a>
                            </li>
                        )}
                        {isAuthenticated &&
                            <li className="nav-item"><a onClick={() => {
                                logout()
                                setIsAuthenticated(false)
                            }} href={HOME_PAGE} className="nav-link">logout</a>
                            </li>
                        }
                        {!isAuthenticated &&
                            <li className="nav-item">
                                <a className="nav-link" href={SIGN_IN}>sign in</a>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar;