import React, { useState } from "react";
import { useLocation } from "react-router";
import Container from "../Component/Container";
import remote from "../assets/remote.png";
import axios  from 'axios';
import { useSelector } from 'react-redux';

const ChackOut = () => {
  const oderProduct=useSelector((state)=>state.cardData.cardItem)
  console.log(oderProduct,'10')
  const location = useLocation();
  const [formData,setFormData]=useState({
      firstname: "",
      companyname: "",
      streetaddress: "",
      apartment: "",
      city: "",
      phonenumber: "",
      email: "",
  })
  console.log(location);
  const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(formData,"16")
    const response= await axios.post('http://localhost:5000/api/v1/chackout/createChackOut',{
       firstName: formData.firstname,
      companyName: formData.companyname,
      streetAddress: formData.streetaddress,
      apartment: formData.apartment,
      city: formData.city,
      phoneNumber: formData.phonenumber,
      email: formData.email,
      oderProduct:oderProduct,
    })
    .then((response)=>(window.location.href = response.data.pathurl))

    setFormData({
      firstname: "",
      companyname: "",
      streetaddress: "",
      apartment: "",
      city: "",
      phonenumber: "",
      email: "",
    });
  }
  return (
    <div className="py-12">
      <Container>
        <div>
          <p>
            home/product/cardDetails/
            <span className="font-semibold">
              {location.pathname.split("/")[1]}
            </span>
          </p>
        </div>
        <div className="font-Inter font-medium text-[36px] text-black mt-[80px] mb-[48px]">
          Billing Details
        </div>
        <form onSubmit={handleSubmit} className="flex justify-between">
          <div className="w-[45%]">
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                First Name
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="firstname"
              value={formData.firstname}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                Company Name
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="companyname"
              value={formData.companyname}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                Street Address
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="streetaddress"
              value={formData.streetaddress}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                Apartment,floor.etc(optional)
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="apartment"
              value={formData.apartment}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                Town/City
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="city"
              value={formData.city}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-[8px]"
              >
                Phone Number
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="phonenumber"
              value={formData.phonenumber}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="font-Poppins font-normal text-[16px] text-black mb-4"
              >
                Email Address
              </label>
              <input
                type="text"
                className="w-full py-[20px] px-[10px] border-none outline-none
             bg-[#f5f5f5] mt-[8px] mb-[32px]"
              onChange={handleChange}
              name="email"
              value={formData.email}
              />
            </div>
            <div >
              <button className="w-full font-Poppins font-normal text-[16px] text-white bg-[#db4444] text-center
              py-[16px]"
              type="submit" >Submit</button>
            </div>
          </div>
          <div className="w-[45%]">
            <div className="flex justify-between items-center">
              <div className="flex gap-[24px] items-center">
                <img src={remote} alt="" className="w-[54px] h-[54px]" />
                <p className="font-Poppins font-normal text-[16px] text-black">
                  LCD Monitor
                </p>
              </div>
              <p className="font-Poppins font-normal text-[16px] text-black">
                $650
              </p>
            </div>
            <div className="flex justify-between pb-[16px] border-b-[1px] mt-[20px] border-black">
              <p className="font-Poppins font-normal text-[16px] text-black">Subtotal:</p>
              <p>{location.state.sub}</p>
            </div>
            <div className="flex justify-between pb-[16px] border-b-[1px] mt-[20px] border-black">
              <p className="font-Poppins font-normal text-[16px] text-black">Shipping:</p>
              <p className="font-Poppins font-normal text-[16px] text-black">free</p>
            </div>
            <div className="flex justify-between pb-[16px]  mt-[20px] ">
              <p className="font-Poppins font-normal text-[16px] text-black">Total</p>
              <p>{location.state.sub}</p>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ChackOut;
