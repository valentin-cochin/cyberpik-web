import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { axiosToken } from '../shared/axios-config'
import { DOWNLOAD, EFFECT, GITHUB_ANTOINE, GITHUB_VALENTIN, IMPORT } from '../shared/url-constants'


const Preview = () => {
    const [effectTitle, setEffectTitle] = useState(0)
    const [orignalImageId, setOrignalImageId] = useState(0)
    const [transformedImage, setTransformedImage] = useState(0);
    const location = useLocation()
    const history = useHistory()

    let isImgReceived = (transformedImage !== 0)

    console.log("imageId from Preview view is " + orignalImageId)

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    useEffect(() => {
        if (!location.state) {
            history.push(IMPORT)
        } else {
            setOrignalImageId(location.state.imageId)
            setEffectTitle(location.state.effectTitle)
            console.log(orignalImageId)
            console.log(effectTitle)
        }
    }, [location.state, history, orignalImageId, effectTitle])

    useEffect(() => {
        if (orignalImageId !== 0)
            axiosToken.get("/effects/nst/" + orignalImageId + "?style=" + effectTitle,
                { responseType: 'arraybuffer' },
            )
                .then(response => {
                    const base64 = btoa(
                        new Uint8Array(response.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ''
                        )
                    )
                    setTransformedImage({ source: "data:;base64," + base64,
                        blob: response.data});
                })
    }, [orignalImageId, effectTitle])

    const handleEffectButton = () => {
        history.push({
            pathname: EFFECT,
            state: {
                imageId: orignalImageId
            }
        })
    }

    const handleDownloadButton = () => {
        history.push({
            pathname: DOWNLOAD,
            state: {
                transformedImage: transformedImage
            }
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
                            <i className="fa fa-image" aria-hidden="true" style={{ fontSize: "10rem", color: "#777777" }}></i>
                            <div className="col-lg-8 offset-lg-2">
                                <h2>See the result</h2>
                            </div>
                            <div className="overflow-hidden">{
                                isImgReceived ?
                                    <img src={transformedImage.source} alt="transformed" style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }} />
                                    :
                                    <p>Processing</p>
                            }
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
                            </div>
                        </div>
                        <div className="row d-flex justify-content-around">
                            <div className="col-3">
                                <button className="btn btn-custom btn-lg theme-color btn-back m-2" onClick={handleEffectButton}><i className="fa fa-angle-double-left mr-2"></i>Effect</button>
                            </div>
                            {isImgReceived &&
                                <div className="col-3">
                                    <button className="btn btn-custom btn-lg theme-color btn-back m-2" onClick={handleDownloadButton}><i className="fa fa-angle-double-right mr-2"></i>Download</button>
                                </div>
                            }
                        </div>
                    </div>
                </footer>
            </div>
        </section>
    );
}


export default Preview