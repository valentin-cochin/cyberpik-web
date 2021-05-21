import React, { useEffect } from "react";
import Dropzone from "react-dropzone";
import { useHistory } from "react-router-dom";
import { axiosToken } from "../shared/axios-config";
import { SIGN_IN, PROFILE } from "../shared/url-constants";
import { logout } from "../components/user_accounts/logout";
import Navbar from "../components/navbar";

const ProfilePicture = () => {
  let history = useHistory();

  const style = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#777777",
    borderStyle: "dashed",
    backgroundColor: "#eeeeee",
  };

  useEffect(() => {
    setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 1200);
  });

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      let formData = new FormData();
      formData.append("file", file);

      axiosToken
        .patch("/user_accounts/profile_picture", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((resp) => {
          history.push(PROFILE);
        })
        .catch((err) => {
          logout();
          history.push(SIGN_IN);
        });
    });
  };

  return (
    <div>
        <Navbar />
      <section className="authentication-form download">
        <div className="innerpage-decor">
          <div className="innerpage-circle1">
            <img src="../assets/images/Testimonial2.png" alt="" />
          </div>
          <div className="innerpage-circle2">
            <img src="../assets/images/Testimonial1.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <i
                  className="fa fa-cloud-upload"
                  aria-hidden="true"
                  style={{ fontSize: "10rem", color: "#777777" }}
                ></i>
                <div className="col-lg-8 offset-lg-2">
                  <h2>Import your profile picture</h2>
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
                      <h3>
                        Drag 'n' drop your image here, or click to select it
                      </h3>
                      <em>(Only *.jpeg and *.jpg images will be accepted)</em>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePicture;
