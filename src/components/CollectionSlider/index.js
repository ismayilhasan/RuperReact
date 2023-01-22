import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollectionImage1 from "../../Assets/Images/CollectionImage1.jpg";
import CollectionImage2 from "../../Assets/Images/CollectionImage2.jpg";
import CollectionImage3 from "../../Assets/Images/CollectionImage3.jpg";
import CollectionImage4 from "../../Assets/Images/CollectionImage4.jpg";
import CollectionImage5 from "../../Assets/Images/CollectionImage5.jpg";
import './style.scss'
import axios, { Axios } from "axios";

export default class CollectionSlider extends Component {
  state = {
    data:[]
  }
  async componentDidMount() {
    const {data:categoires} = await axios.get("https://localhost:7216/api/Categories")
  
    this.setState({data : categoires})
}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    
    const {data} = this.state

   
    return (
      <section id="CollectionSlider">
        <div className="container">
            <div className="heading-collection">
                <h2>our collection</h2>
            </div>
        <Slider {...settings}>
      
            {data.map((category) => (
                 <div className="slider-item-collection">
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
}