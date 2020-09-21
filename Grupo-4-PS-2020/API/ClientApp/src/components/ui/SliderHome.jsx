import React from "react";
//import Slider from "react-slick";
import { Carousel } from "react-bootstrap";
import "./SliderHome.css";

const SliderHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.fabricastextiles.com.ar/wp-content/uploads/2015/06/botines-nike.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/26/e4/1b/26e41bda254dd1e7b41ad1e98383f4b6.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/26/e4/1b/26e41bda254dd1e7b41ad1e98383f4b6.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     pauseOnHover: true,
    // };

    // return (
    //     <div>
    //         <Slider {...settings}>
    //             <div>
    //                 <img
    //                     className="img-slider"
    //                     src="https://www.fabricastextiles.com.ar/wp-content/uploads/2015/06/botines-nike.jpg"
    //                 />
    //             </div>
    //             <div>
    //                 <img
    //                     className="img-slider"
    //                     src="https://i.pinimg.com/originals/26/e4/1b/26e41bda254dd1e7b41ad1e98383f4b6.jpg"
    //                 />
    //             </div>
    //             <div>
    //                 <img
    //                     className="img-slider"
    //                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt_WwkQXA1nYwkr4mx_DkLb-mKufXLUPcQwQ&usqp=CAU"
    //                 />
    //             </div>
    //         </Slider>
    //     </div>
    // );
};

export default SliderHome;
