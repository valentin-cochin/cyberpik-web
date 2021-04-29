import React from 'react';

class Navbar extends React.Component {
    componentDidMount() {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light theme-nav fixed-top">
                <div id="navbar-main" className="container">
                    <a className="navbar-brand" href={`${process.env.PUBLIC_URL}/`}><img src="assets/images/logo.png" alt="logo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse default-nav" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" id="mymenu">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${process.env.PUBLIC_URL}/gallery`}>gallery</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">about</a>
                                <ul className="dropdown-menu">
                                    <a className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/project-presentation`}>Project presentation</a></a>
                                    <a className="nav-item"><a className="nav-link" href={`${process.env.PUBLIC_URL}/general-conditions`}>General Conditions</a></a>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${process.env.PUBLIC_URL}/sign-in`}>sign in</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`${process.env.PUBLIC_URL}/profile`}>profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;