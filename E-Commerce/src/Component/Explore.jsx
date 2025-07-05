import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import Products from "./Products";
import cat from "../../src/assets/cat.png"
import ProductInfo from "./ProductInfo";

const Explore = () => {
  return (
    <div className="py-[75px]">
      <Container>
        <Card tittle="Our Products"></Card>
        <div>
          <h3 className="font-Inter font-semibold text-[36px] text-black mt-[20px]">
            Explore Our Products
          </h3>
        </div>
        <div className="flex justify-between mt-[60px]">
            <div>
                <Products remote={cat}></Products>
                <ProductInfo></ProductInfo>
            </div>
            <div>
                <Products remote={cat}></Products>
                <ProductInfo></ProductInfo>
            </div>
            <div>
                <Products remote={cat}></Products>
                <ProductInfo></ProductInfo>
            </div>
            <div>
                <Products remote={cat}></Products>
                <ProductInfo></ProductInfo>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Explore;
