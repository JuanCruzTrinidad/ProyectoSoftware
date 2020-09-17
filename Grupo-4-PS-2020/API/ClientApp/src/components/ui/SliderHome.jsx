import React, { Component } from "react";
import Slider from "react-slick";
import './SliderHome.css';

const SliderHome = () => {

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img 
            className="img-slider"
            src="https://www.fabricastextiles.com.ar/wp-content/uploads/2015/06/botines-nike.jpg"
          />
        </div>
        <div>
          <img 
            className="img-slider"
            src="https://i.pinimg.com/originals/26/e4/1b/26e41bda254dd1e7b41ad1e98383f4b6.jpg"
          />
        </div>
        <div>
          <img 
            className="img-slider"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt_WwkQXA1nYwkr4mx_DkLb-mKufXLUPcQwQ&usqp=CAU"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
