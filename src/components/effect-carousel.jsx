import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';

const EffectCarousel = ({handleChange}) => {
    const images =
        [
            { id: 0, title: 'synthwave-back', src: "../assets/images/effects/synthwave-back.jpg" },
            { id: 1, title: 'vaporwave-angel', src: "../assets/images/effects/vaporwave-angel.jpg" },
            { id: 2, title: 'vaporwave-fluid', src: "../assets/images/effects/vaporwave-fluid.jpg" },
            { id: 3, title: 'vaporwave-glitch_line', src: "../assets/images/effects/vaporwave-glitch_line.jpg" }
        ]

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