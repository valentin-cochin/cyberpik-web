import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';

const EffectCarousel = (props) => {
    const [images, setImages] = useState(
        [
            { id: 0, title: 'item #1', src: "assets/images/app/2.jpg" },
            { id: 1, title: 'item #2', src: "assets/images/app/3.jpg" },
            { id: 2, title: 'item #5', src: "assets/images/app/5.jpg" }
        ]);

    const responsiveOptions = {
        0: {
            items: 2
        },
        768: {
            items: 3
        }
    };

    useEffect(() => {
        setTimeout(function () {
            document.querySelector(".loader-wrapper").style = "display: none"
        }, 1200);
    })

    const handleChange = (property) => {
        let currIndex = property.item.index
        let slides = $(property.target).find(".owl-item")
        let currSlide = slides.eq(currIndex)

        slides.css('border', 'none')
        currSlide.css('border', 'solid')

        var alt = currSlide.find("img").attr('alt')

        console.log('Image current is ' + alt)
        props.updateEffectTitle(alt)
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
            navText={[
                "<i class='fa fa-chevron-left fa-3x' style='color:#777777'></i>",
                "<i class='fa fa-chevron-right fa-3x' style='color:#777777'></i>"
            ]}
            onChanged={handleChange}
        >
            {images.map((image) => <div className="screenshot-item" key={image.title}><img src={image.src} alt={image.title} /></div>)}
        </OwlCarousel>
    );
}


export default EffectCarousel;