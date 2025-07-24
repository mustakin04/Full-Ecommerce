import React from "react";
import Discount from "./Discount";
const dis = "-40%";
const Product = ({ value,remote }) => {
  // console.log(product,"7")
  return (
    <div className="relative  w-[270px] h-[250px] flex justify-center items-center p bg-[#f5f5f5] group">
      <img src={remote} alt="" className="w-[270px] h-[250px] object-cover"/>
      {value && <Discount tittle={dis}></Discount>}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center
       py-2 font-Poppins text-sm hidden group-hover:block duration-200">
        Add To Cart
      </div>
    </div>
  );
};

export default Product;