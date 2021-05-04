import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { axiosToken } from "../../config/axios-config";
import { GALLERY } from "../../config/url-constants";
import Navbar from "../components/navbar";

const PhotoDetails = () => {
  const location = useLocation();
  const history = useHistory();
  const [imageId, setImageId] = useState(0);
  const [image, setImage] = useState({});

  useEffect(() => {
    setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 1200);
  }, []);

  useEffect(() => {
    if (!location.state) {
      history.push(GALLERY);
    } else {
      setImageId(location.state.imageId);
    }
  });

  useEffect(() => {
    if (imageId !== 0)
      axiosToken
        .get("/images/" + imageId, { responseType: "arraybuffer" })
        .then((response) => {
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setImage({ source: "data:;base64," + base64 });
        });
  }, [imageId]);

  return (
    <div>
      <Navbar />
      <div className="page-margin">
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">
                  <span>Photo Details</span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <section className="authentication-form download">
          <div className="innerpage-decor">
            <div className="innerpage-circle1">
              <img src="assets/images/Testimonial2.png" alt="" />
            </div>
            <div className="innerpage-circle2">
              <img src="assets/images/Testimonial1.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="blog-item">
              <div className="blog-block">
                <div className="blog-box">
                  <div className="overflow-hidden">
                    <a>
                      <img
                        src={image.source}
                        alt={imageId}
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-button text-center">
              <button type="submit" className="btn btn-custom theme-color mt-5">
                Modify
              </button>
              <button type="submit" className="btn btn-custom theme-color ml-5 mr-5 mt-5">
                Define as Profile Picture
              </button>
              <button type="submit" className="btn btn-custom theme-color mt-5">
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PhotoDetails;
