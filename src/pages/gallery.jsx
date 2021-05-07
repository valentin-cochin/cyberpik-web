import React, { useEffect, useState } from 'react';
import { axiosToken } from '../../config/axios-config';
import { PhotosList } from '../components/gallery/photos-list';
import Navbar from '../components/navbar';
import { logout } from '../components/user_accounts/logout';
import { useHistory, useLocation } from 'react-router';
import { GALLERY, IMPORT, SIGN_IN } from '../../config/url-constants';
import { Link } from 'react-router-dom';



const Gallery = () => {

    const history = useHistory()
    const location = useLocation()

    const [imagesId, setImagesId] = useState([])
    const nbOfImagesPerPage = 3
    const [nbOfPages, setNbOfPages] = useState(0);
    const [pages, setPages] = useState([]);
    const [actualPage, setActualPage] = useState(1)
    const [imagesIdToShow, setImagesIdToShow] = useState([])

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    },[])

    useEffect(() => {
        axiosToken.get('/images/').then(resp =>{
            setImagesId(resp.data)
            setNbOfPages(Math.ceil(resp.data.length / nbOfImagesPerPage))
        }).catch(err => {
            console.log(err);
            // logout()
            // history.push(SIGN_IN)
        })
    },[actualPage])


    useEffect(() => {
        if(actualPage !== 0 && imagesId.length !== 0){
            const firstElement = (actualPage-1) * nbOfImagesPerPage
            const lastElement = Math.min(actualPage * nbOfImagesPerPage, imagesId.length)

            const arrId = []
            const arrPages = []

            for(let i = firstElement; i < lastElement; i++) {
                arrId.push(imagesId[i])
            }
            for(let i = 1; i <= nbOfPages; i++){
                arrPages.push(i)
            }
            setImagesIdToShow(arrId)
            setPages(arrPages)
        }
    },[actualPage, nbOfPages])


    const goToPage = (pageNb) => {
        setActualPage(pageNb.page)
    }

    return (
        <div>
                <Navbar />
                <div className="page-margin">
                    <div className="breadcrumb-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                                    <h2 className="title"><span>Gallery</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className="authentication-form download mt-5">
                        <div className="innerpage-decor">
                            <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                            <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
                        </div>

                        <div className="container">
                            <div className="row">
                                {console.log(nbOfPages, "nb of pages", actualPage, "actual Page", imagesIdToShow, "images")}
                                {imagesId.length !== 0 && <PhotosList imagesId={imagesIdToShow} />}
                                {imagesId.length === 0 && <Link className="col-md-12 text-center" to={IMPORT}><h1>ADD YOUR FIRST PHOTO</h1></Link>}
                            </div>
                        <div className="form-button text-center mt-5">
                            {pages.map(page => { return (
                                <button key={page} onClick={() => goToPage({page})} type="submit" className="btn btn-custom theme-color mr-1 mt-2">{page}</button>
                            )})}
                        </div>
                        </div>
                    </section>
                </div>
            </div>
        )
}


export default Gallery