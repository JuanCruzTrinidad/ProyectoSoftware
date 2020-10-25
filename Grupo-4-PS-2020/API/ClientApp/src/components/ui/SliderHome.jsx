import React from "react";
import { Carousel } from "react-bootstrap";
import "./SliderHome.css";

const SliderHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.cinconoticias.com/wp-content/uploads/adidas-argentina-1068x600.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>Los mejores productos, de las mejores marcas.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images4.alphacoders.com/632/thumb-1920-632661.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1117712.jpg"
                    alt="Third slide"
                    style={{height: 515}}
                />
            </Carousel.Item>
        </Carousel>
    );
    
};

export default SliderHome;
