import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import axios from "axios";

const SliderComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: categoires } = await axios.get(
        "https://localhost:7216/api/Sliders"
      );
      setData(categoires);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <section id="MainSlider">
        <Slider {...settings}>
          {data.map((slide) => (
            <div key={slide.id} className="slider-item-main">
              <div className="image-content">
                <img className="slider-item-image" src={slide.imageName} />
              </div>
              <div className="text-content">
                <div className="subtitle-slider">{slide.title}</div>
                <h2 className="title-slider">{slide.subtitle}</h2>
                <div className="description-slider">
                  Save up to 500$ on outdoor packages
                </div>
                <a className="slider-button">{slide.buttonName}</a>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};
export default SliderComponent;