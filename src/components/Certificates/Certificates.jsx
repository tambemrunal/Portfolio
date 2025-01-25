// import React from "react";
import "./Certificates.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../images/certificates/hackathon_certificate.jpg'
import img2 from '../../images/certificates/flipkart_grid.jpg'
import img3 from '../../images/certificates/cpp_certificate.jpg'
import img4 from '../../images/certificates/html_certificate.jpg'
import img5 from '../../images/certificates/python_certificate.jpg'
import img6 from '../../images/certificates/webdev_workshop.jpg'
import theme_pattern from "../../assets/theme_pattern.svg";


const Certificates = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
    <div className="certificate">
      <div className="certificate-title">
        <h1>Certificates</h1>
        <img src={theme_pattern} alt="" />
      </div>
      
      <div className="image-slider">
        <Slider {...settings}>
    
            <div >
              <img className="img" src={img1} alt={`Slide 1`} />
            </div>
            <div >
              <img className="img" src={img2} alt={`Slide 2`} />
            </div>
            <div >
              <img className="img" src={img3} alt={`Slide 3`} />
            </div>
            <div >
              <img className="img" src={img4} alt={`Slide 3`} />
            </div>
            <div >
              <img className="img" src={img5} alt={`Slide 3`} />
            </div>
            <div >
              <img className="img" src={img6} alt={`Slide 3`} />
            </div>
        </Slider>
      </div>
      </div>
    </>
  );
};

export default Certificates;
