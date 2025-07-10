import React, { useEffect, useState } from "react";
import Container from "../Component/Container";
import { useLocation, useParams } from "react-router";
import frame1 from "../assets/Frame 1.png";
import frame2 from "../assets/Frame 2.png";
import frame3 from "../assets/Frame 3.png";
import frame4 from "../assets/Frame 4.png";
import { CiStar } from "react-icons/ci";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cardData } from "../Slices/CardSlice";

const ProductDetails = () => {
  const path = useLocation();
  const dispatch=useDispatch()
  const { id } = useParams();
  //  console.log(id,"13")
  const [select, setSelect] = useState();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const patchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/product/getProductlist"
        );
        console.log(response,"20")
        setProductData(response.data.data);
      } catch (error) {
        console.log("Error fetching product list:", error);
      }
    };
    patchData();
  }, []);

  
  const data = productData.find((product) => product._id === id);
  // console.log(data, "32");
  useEffect(() => {
    if (data?.image) {
      setSelect(data?.image);
    }
  }, [data]);
   const handleCardData=(product)=>{
    console.log(product,"45")
        dispatch(cardData(product))
         const existing = JSON.parse(localStorage.getItem("cardDatas")) || [];
         existing.push(product);
        localStorage.setItem("cardDatas",JSON.stringify(existing))

   }
  if(!data){
     return (
      <Container className="mt-[100px] mb-[100px]">
        <p className="text-center text-xl font-semibold">Loading product details...</p>
      </Container>
    );
  }
  return (
    <div>
      <Container className='mb-[40px]'>
        <div>
          <p className="font-Poppins font-normal text-[14px] mt-[80px] mb-[50px]">
            Home/Shop/{path.pathname.split("/")[2]}
          </p>
        </div>
        <div className="flex">
          <div className="w-[70%] flex gap-x-8">
            <div className="space-y-4">
              <img onClick={() => setSelect(frame1)} src={frame1} alt="" />
              <img onClick={() => setSelect(frame2)} src={frame2} alt="" />
              <img onClick={() => setSelect(frame3)} src={frame3} alt="" />
              <img onClick={() => setSelect(frame4)} src={frame4} alt="" />
            </div>
            <div className="w-[500px] h-[600px]">
              <img
                src={select}
                alt=""
                className=" h-[600px] object-cover w-full"
              />
            </div>
          </div>
          <div className="w-[30%]">
            <h3 className="font-Inter font-semibold text-[24px] text-black">
              {data.name}
            </h3>
             <div className="flex text-[#ffad33] text-xl  ">
                <CiStar className=""  />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
            <div className="font-Inter font-normal text-[24px] my-[20px]">
             <p>${data.price}</p>
            </div>
            <div>
               <p>PlayStation 5 Controller Skin High qualilty vinyl with air channel adhesive for easy</p>
            </div>
            <div className="w-full h-[1px] bg-black my-[10px] "></div>
            <div className="flex items-center gap-2">
               <p className="font-Inter font-normal text-[24px] ">Colours:</p>
               <div className="w-[20px] h-[20px] bg-[#a0bce0] rounded-full"></div>
               <div className="w-[20px] h-[20px] bg-[#e07575] rounded-full "></div>
            </div>
            <div className="flex bg-[#db4444] w-[165px] font-Poppins font-medium text-[16px]
             text-white text-center mt-[30px] rounded-md"
             onClick={()=>handleCardData(data)}>
               <button className="px-[48px] py-[10px] ">Buy Now</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
