import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = ({ size }) => {
    return (
        <div className="container row justify-content-center align-items-center mt-5 loader">
            <Loader type="Circles" color="#00BFFF" height={size} />
        </div>
    );
};

export default Loading;