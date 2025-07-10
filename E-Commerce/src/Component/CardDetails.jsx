import React, { useState } from "react";
import Container from "./Container";
import { useLocation } from "react-router";
import lcd from "../assets/drees.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";

const CardDetails = () => {
  const [data,setData]=useState([])
  const path = useLocation();
  const select=useSelector((state)=>(state.cardData.cardItem))
  console.log(select,"12")
  return (
    <div className="py-[80px]">
      <Container>
        <div>
          <p>home/{path.pathname.split("/")[1]}</p>
        </div>
        <div
          className="flex mt-[30px] font-Poppins font-normal text-[16px] text-black py-[24px] 
           px-[40px]  shadow-[0px_1px_13px_0px_rgba(0,0,0,0.5)]"
        >
          <div className="w-[40%]">Product</div>
          <div className="w-[20%]">Price</div>
          <div className="w-[20%]">Quantity</div>
          <div className="w-[20%]">Subtotal</div>
        </div>
        {
          select.map((item,index)=>
          (<div key={index} className="flex items-center mt-[40px] px-[40px] shadow-md py-[24px]">
          <div className="flex gap-3 items-center w-[40%]">
            <img src={lcd} alt="" className="w-[54px] h-[54px]" />
            <p className="font-Poppins font-normal text-[16px]">{item.name}</p>
          </div>
          <div className="w-[20%] font-Poppins font-normal text-[16px]">
            $659
          </div>
          <div className="flex w-[20%]  items-center  ">
           <div className="flex border gap-3 px-2 py-3">
             <h5>01</h5>
            <div className="flex flex-col  ">
              <IoIosArrowUp />
              <IoIosArrowDown />
            </div>
           </div>
            
          </div>
          <div className="w-[20%] font-Poppins font-normal text-[16px]">
              $560
            </div>
        </div>))
        }
      </Container>
    </div>
  );
};

export default CardDetails;
