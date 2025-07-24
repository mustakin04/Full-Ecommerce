import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import remote from "../assets/remote.png";
import drees from "../assets/drees.png"
import Product from "./Product";
import ProductData from "./ProductData";

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
            <Product remote={remote}></Product>
            <ProductData></ProductData>
          </div>
          <div>
            <Product remote={drees}></Product>
            <ProductData></ProductData>
          </div>
           <div>
            <Product remote={drees}></Product>
            <ProductData></ProductData>
          </div>
           <div>
            <Product remote={drees}></Product>
            <ProductData></ProductData>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BestSell;
