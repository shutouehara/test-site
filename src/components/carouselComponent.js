import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/carousel.css";
import { Link } from "gatsby";

import serviceIcon from '../../static/serviceIcon.svg';

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        ssr={true}
        className="pt-2 pb-5"
      >
        <Link to="/">
          <div className="carousel-card bg-white py-3 px-4 text-center rounded-3 shadow">
            <p className="mb-0">建設業<br/>許可申請</p>
            <img src={serviceIcon} alt="" width={80} />
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 px-4 text-center rounded-3 shadow">
            <p className="mb-0">経営事項<br/>審査申請</p>
            <img src={serviceIcon} alt="" width={80} />
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 px-4 text-center rounded-3 shadow">
            <p className="mb-0">競争入札参加資格<br/>審査申請</p>
            <img src={serviceIcon} alt="" width={80} />
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 px-4 text-center rounded-3 shadow">
            <p className="mb-0">建設業<br/>許可申請</p>
            <img src={serviceIcon} alt="" width={80} />
          </div>
        </Link>
      </Carousel>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        ssr={true}
        className="pt-2 pb-5"
      >
        <Link to="/">
          <div className="carousel-card bg-white py-3 text-center rounded-3 shadow">
            <p className="mb-0">建設業許可申請の<br/>要件を確認する</p>
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 text-center rounded-3 shadow">
            <p className="mb-0">経営事項審査申請に<br/>必要な書類を確認する</p>
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 text-center rounded-3 shadow">
            <p className="mb-0">競争入札参加資格審査<br/>申請の流れを確認する</p>
          </div>
        </Link>
        <Link to="/">
          <div className="carousel-card bg-white py-3 text-center rounded-3 shadow">
            <p className="mb-0">建設業<br/>許可申請</p>
          </div>
        </Link>
      </Carousel>
    </>
  );
};

export default CarouselComponent;