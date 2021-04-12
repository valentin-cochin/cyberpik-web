import React from 'react';
import notFound from "../shared/img/not_found.svg"
const NotFoundView = () => {
    return (
        <div className="container mt-5">
            <img className="img-fluid" src={notFound} alt="" />
        </div>
    );
};

export default NotFoundView;
