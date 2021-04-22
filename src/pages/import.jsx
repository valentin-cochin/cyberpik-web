import React, { useEffect, useState } from 'react';
import Dropzone from "react-dropzone";


const Import = () => {

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

    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
        setFileNames(acceptedFiles.map(file => file.name));

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
                            <i className="fa fa-cloud-upload" aria-hidden="true" style={{ fontSize: "10rem", color: "#777777" }}></i>
                            <div className="col-lg-8 offset-lg-2">
                                <h2>Import your image</h2>
                            </div>
                            <Dropzone
                                onDrop={handleDrop}
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
                {/*copy-right-section*/}
                <footer className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-section">
                                    <p>This app was made with ❤️ by <a href="https://github.com/valentin-cochin" target="_blank" rel="noopener noreferrer">Valentin Cochin</a> and <a href="https://github.com/AntoineFran" target="_blank" rel="noopener noreferrer">Antoine François</a></p>
                                </div>
                                <div className="form-button text-center">
                                    <a href="" className="btn btn-custom btn-lg theme-color btn-back"><i className="fa fa-angle-double-left mr-2"></i>Back to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/*end copy right section*/}
            </div>
        </section>
    );
}


export default Import;