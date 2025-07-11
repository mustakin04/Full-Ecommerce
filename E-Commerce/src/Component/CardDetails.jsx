import React, { useState } from "react";
import Container from "./Container";
import { Link, useLocation } from "react-router";
import lcd from "../assets/drees.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { counterData } from "../Slices/CardSlice";
import Discount from './Discount';

const CardDetails = () => {
  let [discount,setDiscount]=useState(0)
   let [subToatal,setSubTotal]=useState(0)
  const [coupon,setCupon]=useState()
  const dispatch=useDispatch()
  const path = useLocation();
  const select=useSelector((state)=>(state.cardData.cardItem))
  // console.log(select,"12")
  const handleClick=(index)=>{
      // console.log(index,"15")
      dispatch(counterData({id:index ,type:"increment"}))
  }
  const handleDcrement=(index)=>{
     dispatch(counterData({id:index}))
  }
  const handleCoupon=()=>{
    if(coupon==="mustakin"){
       setDiscount(total*.1)
    }else{
      setDiscount(0)
    }
  }
    
   const total=select.reduce((previous,current)=>{
        // console.log(previous,"24") 
        //  console.log(current,"25")  
         return previous+current.price*current.cardQun
   },0)
   const sub=total-discount
    // setSubTotal(sub)
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
            <img src={item.image} alt="" className="w-[54px] h-[54px]" />
            <p className="font-Poppins font-normal text-[16px]">{item.name}</p>
          </div>
          <div className="w-[20%] font-Poppins font-normal text-[16px]">
            {item.price}
          </div>
          <div className="flex w-[20%]  items-center  ">
           <div className="flex border gap-3 px-2 py-3">
             <h5>{item.cardQun}</h5>
            <div className="flex flex-col  ">
              <IoIosArrowUp onClick={()=>handleClick(index)}/>
              <IoIosArrowDown onClick={()=>handleDcrement(index)}/>
            </div>
           </div>
            
          </div>
          <div className="w-[20%] font-Poppins font-normal text-[16px]">
              {item.cardQun*item.price}
            </div>
        </div>))
        }
        <div className="flex justify-end w-full mt-[30px] ">
          <div className="flex w-[40%]  border shadow-md items-center gap-20 px-[10px] py-[30px]">
          <p className="font-Poppins font-semibold text-[20px]">Total Price:</p>
          <p className="font-Poppins font-normal text-[16px]">{total}</p>
          </div>
          
        </div>
         <div className="flex justify-end w-full  ">
          <div className="flex w-[40%]  border shadow-md items-center gap-20 px-[10px] py-[30px]">
          <p className="font-Poppins font-semibold text-[20px]">Discount:</p>
          <p className="font-Poppins font-normal text-[16px] text-black">{discount}</p>
          </div>
          
        </div>
        <div className="flex justify-end w-full  ">
          <div className="flex w-[40%]  border shadow-md items-center gap-20 px-[10px] py-[30px]">
          <p className="font-Poppins font-semibold text-[20px]">Subtotal:</p>
          <p className="font-Poppins font-normal text-[16px] text-black">{sub}</p>
          </div>
          
        </div>
        <div>
          <div className="w-[50%] gap-3 flex">
            <input type="text" 
            onChange={(e)=>setCupon(e.target.value)}
            className="w-[60%] py-[16px] px-[24px] border-[1px] border-black placeholder:font-Poppins 
            placeholder:font-normal placeholder:text-[16px]"
            placeholder="Coupon Code" />
            <button className="font-Poppins font-medium text-[16px] text-white bg-[#db4444] text-center 
            py-[16px] px-[48px] rounded-md"
            onClick={handleCoupon}>Apply Coupon</button>
          </div>
          <Link to="/checkout"
                state={{ sub}}
           className="flex justify-end">
            <button className="font-Poppins font-medium text-[16px] text-white py-[16px] px-[48px] bg-[#db4444] 
            text-center rounded-md"
            >Procees to checkout</button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default CardDetails;
