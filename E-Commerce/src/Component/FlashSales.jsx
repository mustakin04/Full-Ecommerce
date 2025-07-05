import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import remote from "../assets/remote.png";


const FlashSales = () => {
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
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="pt-[140px]">
      <Container className="pb-[80px] border-b-2 border-black">
        <Card tittle="Today's"></Card>
        <div className=" flex items-end gap-[87px]">
          <div>
            <h3 className="font-Inter font-semibold text-[36px] text-[#000000]">
              Flash Sales
            </h3>
          </div>
          <div className="flex items-center gap-[17px]">
            <div>
              <p className="font-Poppins font-medium text-[12px] text-[#000000]">
                Days
              </p>
              <p className="font-Inter font-bold text-[32px] text-[#000000] mt-[4px]">
                03
              </p>
            </div>
            <div className=" text-[#e07575] text-2xl">
              <span>:</span>
            </div>
            <div>
              <p className="font-Poppins font-medium text-[12px] text-[#000000]">
                Hour
              </p>
              <p className="font-Inter font-bold text-[32px] text-[#000000] mt-[4px]">
                23
              </p>
            </div>
            <div className=" text-[#e07575] text-2xl">
              <span>:</span>
            </div>
            <div>
              <p className="font-Poppins font-medium text-[12px] text-[#000000]">
                Minutes
              </p>
              <p className="font-Inter font-bold text-[32px] text-[#000000] mt-[4px]">
                19
              </p>
            </div>
            <div className=" text-[#e07575] text-2xl">
              <span>:</span>
            </div>
            <div>
              <p className="font-Poppins font-medium text-[12px] text-[#000000]">
                Seconds
              </p>
              <p className="font-Inter font-bold text-[32px] text-[#000000] mt-[4px]">
                56{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full  mt-[40px]">
          <Slider  {...settings}>
            <div>
              <Products value={true} remote={remote}></Products>
              <ProductInfo></ProductInfo>
            </div>
            <div>
              <Products value={true} remote={remote}></Products>
              <ProductInfo></ProductInfo>
            </div>
            <div>
              <Products value={true} remote={remote}></Products>
              <ProductInfo></ProductInfo>
            </div>
            <div>
              <Products value={true} remote={remote}></Products>
              <ProductInfo></ProductInfo>
            </div>
          </Slider>
        </div>
        <div>
          <Button tittle="View All Products"></Button>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
