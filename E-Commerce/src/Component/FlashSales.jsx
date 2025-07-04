import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import Button from "./Button";

const FlashSales = () => {
  return (
    <div className="pt-[140px] ">
      <Container className="pb-[80px] border-b-2 border-black">
        <Card tittle="Today's"></Card>
        <div className="flex items-end gap-[87px]">
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
        <div className="relative flex justify-between mt-[40px]">
          <div>
            <Products value={true}></Products>
            <ProductInfo></ProductInfo>
          </div>
         <div>
            <Products value={true}></Products>
            <ProductInfo></ProductInfo>
          </div>
          <div>
            <Products value={true}></Products>
            <ProductInfo></ProductInfo>
          </div>
          <div>
            <Products value={true}></Products>
            <ProductInfo></ProductInfo>
          </div>
        </div>
        <div>
            <Button tittle="View All Products"></Button>
        </div>
      </Container>
    </div>
  );
};

export default FlashSales;
