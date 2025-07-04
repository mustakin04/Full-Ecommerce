import React from "react";
import Container from "./Container";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner from "../assets/Frame 560.jpg"
const Banner = () => {
  return (
    <div>
      <Container className="flex">
        <div className="w-[20%] border-r-[1px] border-[#767676]  ">
         <div className="mt-[40px]">
             <div className="flex items-center justify-between">
            <p className="font-Poppins font-normal text-[16px] text-black">
              Woman’s Fashion
            </p>
            <MdKeyboardArrowRight className="text-xl" />
          </div>
          <div className="flex items-center justify-between my-[16px]">
            <p className="font-Poppins font-normal text-[16px] text-black">
              Men’s Fashion
            </p>
            <MdKeyboardArrowRight className="text-xl" />
          </div>
          <div className="font-Poppins font-normal text-[16px] text-black">
            <p>Electronics</p>
            <p className="my-[16px]">Home & Lifestyle</p>
            <p>Medicine</p>
            <p className="my-[16px]">Sports & Outdoor</p>
            <p >Baby’s & Toys</p>
            <p className="my-[16px]">Groceries & Pets</p>
            <p>Health & Beauty</p>
          </div>
         </div>
        </div>
        <div className="w-[80%] flex justify-end mt-[40px]">
            <img src={banner} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
