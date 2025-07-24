import React from "react";
import Container from "./Container";
import Card from "../Layout/Card";
import cat from "../../src/assets/cat.png"
import Product from "./Product";
import ProductData from "./ProductData";

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
                <Product remote={cat}></Product>
                <ProductData></ProductData>
            </div>
            <div>
                <Product remote={cat}></Product>
                <ProductData></ProductData>
            </div>
            <div>
                <Product remote={cat}></Product>
                <ProductData></ProductData>
            </div>
            <div>
                <Product remote={cat}></Product>
                <ProductData></ProductData>
            </div>
        </div>
      </Container>
    </div>
  );
};

export default Explore;
