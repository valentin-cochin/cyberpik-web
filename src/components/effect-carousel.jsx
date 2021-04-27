import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

const EffectCarousel = () => {
    const [images, setImages] = useState(
        [
            { id: 0, title: 'item #1', src: "assets/images/app/2.jpg" },
            { id: 1, title: 'item #2', src: "assets/images/app/3.jpg" },
            { id: 2, title: 'item #5', src: "assets/images/app/2.jpg" }
        ]);

    const responsiveOptions = {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
    };

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    const handleChange = (property) => {
        //$('.owl-item.active.center > div:after').css('border', '1rem solid')
        var current = property.item.index
        $(property.target).find(".owl-item").css('border', 'none')
        $(property.target).find(".owl-item").eq(current).css('border', 'solid')
        var src = $(property.target).find(".owl-item").eq(current).find("img").attr('src')
        console.log('Image current is ' + src)
    }


    return (
        <OwlCarousel
            className="screenshot-carousel owl-carousel owl-theme"
            loop={true}
            margin={30}
            items={3}
            center={true}
            dots={false}
            autoplay={false}
            responsive={responsiveOptions}
            nav={true}
            navText={["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]}
            onChanged={handleChange}
        >
            {images.map((image) => <div className="screenshot-item" key={image.title}><img src={image.src} alt={image.title} /></div>)}
        </OwlCarousel>
    );
}


export default EffectCarousel;