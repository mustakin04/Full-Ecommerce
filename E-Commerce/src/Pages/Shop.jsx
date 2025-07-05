import React from "react";
import Container from "../Component/Container";
import { useLocation } from "react-router";
import Products from "../Component/Products";
import ProductInfo from "../Component/ProductInfo";
import PaginatedItems from "../Component/paginatedItems";

const Shop = () => {
    const location=useLocation()

  return (
    <div>
      <Container>
        <div>
            <p className="font-Poppins font-normal text-[14px] mt-[80px] mb-[50px]">home / {location.pathname.split("/")[1]}</p>
        </div>
        <div className="flex mb-[60px]">
          <div className="w-[20%]">al;a</div>
          <div className="w-[80%]">
            <div className="">
                <PaginatedItems itemsPerPage={12}></PaginatedItems>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
