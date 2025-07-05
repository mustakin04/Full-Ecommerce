import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Category from "./Category";
import { MdPhoneAndroid } from "react-icons/md";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const BrowseCategory = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
            className="absolute top-[-64px] right-[30px] h-9 w-9 flex justify-center items-center
             rounded-full bg-[#F5F5F5] z-[999]"
            
            onClick={onClick}
          >
            <FaArrowRight />
           </ div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
           className="absolute top-[-64px] right-[80px] h-9 w-9 flex justify-center items-center
             rounded-full bg-[#F5F5F5] z-[999]"
            
            onClick={onClick}
          >
            <FaArrowLeft />
          </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="py-[75px]">
      <Container>
        <Card tittle="Categories"></Card>
        <h2 className="font-Inter font-semibold text-[36px] text-black mt-[20px]">
          Browse By Category
        </h2>
        <div className=" mt-[60px] ">
          <div>
            <Slider {...settings}>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
              <Category icon={<MdPhoneAndroid />} tittle="Phones"></Category>
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrowseCategory;
