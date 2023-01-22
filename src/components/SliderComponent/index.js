import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImage1 from "../../Assets/Images/sliderImageContent-1.jpg";
import "./style.scss";
import { cardService } from "../../APIs/Services/CardService";
import axios from "axios";
import useSliders from "../../query-hooks/getHomeSlider";
export default class SliderComponent extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    const { data: categoires } = await axios.get(
      "https://localhost:7216/api/Sliders"
    );

    this.setState({ data: categoires });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { data } = this.state;

    //Sliderda Container ile bagli problem var !!!

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
  }
}
