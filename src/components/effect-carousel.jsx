import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

const EffectCarousel = () => {
    const [images, setImages] = useState(
        [
            { id: 0, title: 'item #1', src: '' },
            { id: 1, title: 'item #2', src: '' },
            { id: 2, title: 'item #5', src: '' }
        ]);

    const carouselOptions = {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        992: {
            items: 4,
        },
        1200: {
            items: 5
        }
    };

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })


    // jQuery method on
    // var owl = $('owl.carousel')
    const handleChange = (property) =>  {
        var current = property.item.index
        var src = $(property.target).find(".owl-item").eq(current).find("img").attr('src');
        console.log('Image current is ' + src);
    }


    return (
        <OwlCarousel
            className="screenshot-carousel owl-carousel owl-theme"
            loop={true}
            margin={30}
            items={5}
            center={true}
            dots={false}
            autoplay={false}
            responsive={carouselOptions}
            onChanged={handleChange}
        >
            <div className="screenshot-item"><img src="assets/images/app/12.jpg" alt="app" /></div>
            <div className="screenshot-item"><img src="assets/images/app/2.jpg" alt="app" /></div>
            <div className="screenshot-item"><img src="assets/images/app/3.jpg" alt="app" /></div>
            <div className="screenshot-item"><img src="assets/images/app/4.jpg" alt="app" /></div>
            <div className="screenshot-item"><img src="assets/images/app/5.jpg" alt="app" /></div>
        </OwlCarousel>
    );
}


export default EffectCarousel;