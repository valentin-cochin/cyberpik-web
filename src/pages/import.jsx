import React, { useEffect } from 'react'
import Dropzone from "react-dropzone"
import { Link, useHistory } from 'react-router-dom'
import { axiosToken } from '../shared/axios-config'
import { EFFECT, GITHUB_ANTOINE, GITHUB_VALENTIN, HOME_PAGE, SIGN_IN } from '../shared/url-constants'
import { logout } from '../components/user_accounts/logout'


const Import = () => {
    let history = useHistory();

    const style = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '5rem',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#777777',
        borderStyle: 'dashed',
        backgroundColor: '#eeeeee',
    };

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    const onDrop = (acceptedFiles) => {
        acceptedFiles.forEach((file) => {

            let formData = new FormData()
            formData.append("file", file)

            axiosToken.post("/images/", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                    console.log(response.data)
                    history.push({
                        pathname: EFFECT,
                        state: { imageId: response.data }
                    })
                }).catch(err => {
                    logout()
                    history.push(SIGN_IN)
                })
        })

    }

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
                            <i className="fa fa-cloud-upload" aria-hidden="true" style={{ fontSize: "10rem", color: "#777777" }}></i>
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Import your image</h2>
                            </div>
                            <Dropzone
                                onDrop={onDrop}
                                accept=".jpeg,.jpg"
                                maxFiles={1}
                                minSize={1024}
                                maxSize={3072000}
                            >
                                {({ getRootProps, getInputProps }) => (
                                    <div {...getRootProps({ style })}>
                                        <input {...getInputProps()} />
                                        <h3>Drag 'n' drop your image here, or click to select it</h3>
                                        <em>(Only *.jpeg and *.jpg images will be accepted)</em>
                                    </div>
                                )}
                            </Dropzone>
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


export default Import