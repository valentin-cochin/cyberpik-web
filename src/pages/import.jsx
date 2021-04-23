import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import Dropzone from "react-dropzone";
import { Link } from 'react-router-dom';
import { HOME_PAGE } from '../../config/url-constants';


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

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
                upload(binaryStr)
            }
            reader.readAsArrayBuffer(file)
        })

    }, [])

    const upload = (binaryStr) => {
        let formData = new FormData();
        formData.append("file", binaryStr);
        console.log(formData);
        axios.post("localhost:8080/image/upload", formData)
            .then(response => {
                console.log(response.data);
                // TODO: Add preview code here
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                {/*copy-right-section*/}
                <footer className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="copyright-section">
                                    <p>This app was made with ❤️ by <a href="https://github.com/valentin-cochin" target="_blank" rel="noopener noreferrer">Valentin Cochin</a> and <a href="https://github.com/AntoineFran" target="_blank" rel="noopener noreferrer">Antoine François</a></p>
                                </div>
                                <div className="form-button text-center">
                                    <Link to={HOME_PAGE} className="btn btn-custom btn-lg theme-color btn-back"><i className="fa fa-angle-double-left mr-2"></i>Back to home</Link>
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