import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Products from "./Products";
import remote from "../assets/remote.png";
import ProductInfo from "./ProductInfo";
import drees from "../assets/drees.png"

const BestSell = () => {
  return (
    <div className="py-[75px]">
      <Container>
        <Card></Card>
        <div className="flex justify-between mt-[20px]">
          <h3 className="font-Inter font-semibold text-[36px] text-black">
            Best Selling Products
          </h3>
          <div className=" bg-[#db4444] flex justify-center items-center">
            <a
              className="font-Poppins font-medium text-[16px] py-[16px] px-[48px] rounded-sm text-white "
              href=""
            >
              View All
            </a>
          </div>
        </div>
        <div className="flex justify-between mt-[60px]">
          <div>
            <Products remote={remote}></Products>
            <ProductInfo></ProductInfo>
          </div>
          <div>
            <Products remote={drees}></Products>
            <ProductInfo></ProductInfo>
          </div>
           <div>
            <Products remote={drees}></Products>
            <ProductInfo></ProductInfo>
          </div>
           <div>
            <Products remote={drees}></Products>
            <ProductInfo></ProductInfo>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSell;
