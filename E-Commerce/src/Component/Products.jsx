import React from "react";

import Discount from "./Discount";
import Button from "./Button";
const dis = "-40%";
const Products = ({ value,remote }) => {
  return (
    <div className="relative  w-[270px] h-[250px] flex justify-center items-center py-[35px] px-[40px] bg-[#f5f5f5] group">
      <img src={remote} alt="" />
      {value && <Discount tittle={dis}></Discount>}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center
       py-2 font-Poppins text-sm hidden group-hover:block duration-200">
        Add To Cart
      </div>
    </div>
  );
};

export default Products;
