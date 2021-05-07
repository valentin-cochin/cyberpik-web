import React from 'react';
import { PhotosDisplay } from './photo-display';


export const PhotosList = ({imagesId}) => {
    return (
        <div className="col-sm-12">
            <div className="row blog-list">
                {imagesId.map((imageId, index) => {
                    return(
                        <PhotosDisplay key={index} imageId={imageId}/>
                    )
                })}
            </div>
        </div>
    )
}