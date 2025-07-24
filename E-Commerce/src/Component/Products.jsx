import React from "react";
import Discount from "./Discount";
import remote from "../assets/remote.png"; // fallback image

const Products = ({ value, product }) => {
  // If product is undefined or null, don't render anything or show fallback
  if (!product) {
    return (
      <div className="w-[270px] h-[250px] flex items-center justify-center bg-[#f5f5f5] text-red-500">
        Product not found
      </div>
    );
  }

  const dis = product.discount || "-40%";

  return (
    <div className="relative w-[270px] h-[250px] flex justify-center items-center bg-[#f5f5f5] group overflow-hidden">
      <img
        src={product.image || remote}
        alt={product.name || "Product"}
        className="w-[270px] h-[250px] object-cover"
      />
      {value && <Discount tittle={dis} />}
      <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 font-Poppins text-sm hidden group-hover:block duration-200">
        Add To Cart
      </div>
    </div>
  );
};

export default Products;
