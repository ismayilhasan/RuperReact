import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './style.scss'

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