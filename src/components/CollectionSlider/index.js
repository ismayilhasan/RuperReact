import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './style.scss'


function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="next-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-right arrow-icon"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prev-arrow" onClick={onClick}>
      <i className="fa-solid fa-angle-left arrow-icon"></i>
    </div>
  );
}

export default function CollectionSlider() {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const { data: categoires } = await axios.get("https://localhost:7216/api/Categories");
      setData(categoires);
    };
    fetchData();
  }, []);

  const handleClick = (category) => {
    history.push("/shop/",category.name);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
    <section id="CollectionSlider">
      <div className="container">
        <div className="heading-collection">
          <h2>our collection</h2>
        </div>
        <Slider {...settings}>
          {data.map((category) => (
            <div
              key={category.id}
              className="slider-item-collection"
              onClick={() => handleClick(category)}
            >
              <img className="collection-image" src={category.imageName} alt="" />
              <div className="text-collection">
                <h2>{category.name}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}