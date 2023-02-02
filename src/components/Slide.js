import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Slide() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (
  <>
    <Slider {...settings} className="slider">
  <div>
  <img src="/icons/SALE.webp"></img>
  </div>
   <div>
   <img src="/icons/SALE2.png"></img>
   </div>
   <div>
   <img src="/icons/SALE3.jpg"></img>
   </div>
   <div>
   <img src="/icons/sale4.jpg"></img>
   </div>
   <div>
   <img src="/icons/sale5.jpg"></img>
   </div>
   <div>
   <img src="/icons/sale6.png"></img>
   </div>
    </Slider>
</>
  );
}
