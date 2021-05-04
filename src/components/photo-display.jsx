import React, { useEffect, useState } from "react";
import axios from "axios";
import { BACK_END_URL, PHOTO_DETAILS } from "../../config/url-constants";
import { useHistory } from "react-router";
import PhotoDetails from "../pages/photo-details";

export const PhotosDisplay = ({ imageId }) => {
    const history = useHistory()
    const [image, setImage] = useState(0);

  useEffect(() => {
    getImage(imageId);
  }, []);

  const getImage = (imageId) => {
    if (imageId !== null)
      axios
        .get(BACK_END_URL + "/images/" + imageId, {
          responseType: "arraybuffer",
        })
        .then((response) => {
          const base64 = btoa(
            new Uint8Array(response.data).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          setImage({ source: "data:image/jpeg;base64," + base64 });
        });
  };

  const goToPhotoDetails = () => {
    history.push({
        pathname: PHOTO_DETAILS,
        state: { imageId: imageId }
    })
  };

  return (
    <div className="col-md-6">
      <div className="blog-item">
        <div className="blog-block">
          <div className="blog-box">
            <div className="overflow-hidden">
              <a>
                <img src={image.source} alt={imageId} onClick={goToPhotoDetails} className="img-fluid" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
