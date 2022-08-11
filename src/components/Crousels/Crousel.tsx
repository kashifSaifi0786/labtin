import React from "react";
import Slider from "react-slick";
import LabTestCards from "../LabTestCards";
import PakagesCard from "../PakagesCard";
import Data from "../../testData/individual.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PopularPakages from "../../DesktopPages/PopularPakages";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./Crousel.css";
const Crousel = (props: any) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    useCSS: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const indivualData = Data.Individualdata;
  const pakageData = Data.PakagesData;
  const individualTestDiv = indivualData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <PopularPakages offPercentage="30" Name="Advanced Health Package" />
      </div>
    );
  });
  const pakageTestDiv = pakageData.map((data, index) => {
    return (
      <div key={data.heading + index}>
        <PopularPakages offPercentage="30" Name="Advanced Health Package" />
      </div>
    );
  });
  return (
    <div className="crousel_forDestop">
      <Slider {...sliderSettings}>
        {props.crousalData == "pakages" ? pakageTestDiv : individualTestDiv}
      </Slider>
    </div>
  );
};

export default Crousel;
