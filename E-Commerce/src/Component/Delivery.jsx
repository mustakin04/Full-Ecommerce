import React from "react";
import Container from "./Container";
import { FaCarCrash } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const Delivery = () => {
  return (
    <div className="py-[80px]">
      <Container className="flex justify-evenly">
        <div className="w-[249px]">
          <div
            className="w-[40px] h-[40px] flex justify-center m-auto items-center bg-black rounded-full border-[6px]
             border-[#c1c1c1] mb-[24px] "
          >
            <FaCarCrash className="text-white text-xl" />
          </div>
          <p className="font-Poppins font-semibold text-[20px] text-black">
            FREE AND FAST DELIVERY
          </p>
          <p className="font-Poppins font-normal text-[14px] text-black mt-[8px]">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="w-[249px]">
          <div
            className="w-[40px] h-[40px] flex justify-center m-auto items-center bg-black rounded-full border-[6px]
             border-[#c1c1c1] mb-[24px] "
          >
            <FaHeadphones className="text-white text-xl" />
          </div>
          <p className="font-Poppins font-semibold text-[20px] text-black">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="font-Poppins font-normal text-[14px] text-black mt-[8px]">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="w-[256px]">
          <div
            className="w-[40px] h-[40px] flex justify-center m-auto items-center bg-black rounded-full border-[6px]
             border-[#c1c1c1] mb-[24px] "
          >
            <RiSecurePaymentFill className="text-white text-xl" />
          </div>
          <p className="font-Poppins font-semibold text-[20px] text-black">
            MONEY BACK GUARANTEE
          </p>
          <p className="font-Poppins font-normal text-[14px] text-black mt-[8px]">
            We reurn money within 30 days
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Delivery;
