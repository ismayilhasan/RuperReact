import React from "react";
import "./style.scss";
import aboutUsImage from "../../Assets/Images/about-us-2.jpg";
import Features from "../../components/Features";
import BannerImages from "../../components/BannerImages";
import useBrands from "../../query-hooks/useBrands";
function AboutUs() {
    const {data:brands,isLoading,isError,isSuccess} = useBrands()

  return (
    <>
      <div className="about-heading">
        <div className="container">
          <h1 className="shop-title-heading">About Us</h1>
        </div>
      </div>

      <section id="GreatDesign">
        <div className="container">
        <div className="great-desing-header">
          <h2 className="great-desing-title">Great Design For All</h2>
          <div class="sub-title">
            At Ruper, we create affordable designs for the modern home
          </div>
        </div>

        <div className="great-desing-body">
          <div className="box">
            <img className="box-image" src={aboutUsImage} alt="aboutusimage" />
          </div>
          <div className="box box-right">
            <div className="box-text">
              <i class="fa-solid fa-ruler icon-banner"></i>
              <h3 class="title-banner">Designs You Desire</h3>
              <div class="banner-image-description">
                We love creating furniture you want and will love for years to
                come. Our designs feature a fusion of unique styles that inspire
                us – from mid-century modern to contemporary.
              </div>
              <a class="button-readmore button-outline" href="blog-grid-right.html">READ MORE</a>
            </div>
          </div>
        </div>
        </div>
      </section>

      <Features/>

      <BannerImages/>

      <section id="Brands">
            <div className="container">
                <div className="box-all">
                {isLoading && <p>Loading...</p>}
                {isError && <p>Could not fetch users</p>}
                {isSuccess &&
                      brands.map((brand) => (
                        <div className="box">
                            <img src={brand.imageName} alt=""/>
                        </div>
                      ))}
              

                </div>
              
            </div>
      </section>
    </>
  );
}

export default AboutUs;
