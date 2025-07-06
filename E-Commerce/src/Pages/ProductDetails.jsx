import React, { useState } from 'react'
import Container from '../Component/Container'
import { useLocation } from 'react-router'
import frame1 from "../assets/Frame 1.png"
import frame2 from "../assets/Frame 2.png"
import frame3 from "../assets/Frame 3.png"
import frame4 from "../assets/Frame 4.png"
import frame5 from "../assets/Frame 5.png"

const ProductDetails = () => {
    const path=useLocation()
    const [select,setSelect]=useState(frame5)
  return (
    <div>
        <Container>
             <div>
                <p className="font-Poppins font-normal text-[14px] mt-[80px] mb-[50px]">Home/Shop/{path.pathname.split("/")[2]}</p>
             </div>
             <div className='flex'> 
                <div className='w-[70%] flex gap-x-28'>
                   <div className='space-y-4'>
                      <img onClick={()=>setSelect(frame1)} src={frame1} alt="" />
                      <img onClick={()=>setSelect(frame2)} src={frame2} alt="" />
                      <img onClick={()=>setSelect(frame3)} src={frame3} alt="" />
                      <img onClick={()=>setSelect(frame4)} src={frame4} alt="" />
                   </div>
                   <div className='w-[500px] h-[600px]'>
                      <img src={select} alt="" className=' h-[600px] object-cover w-full'  />
                   </div>
                </div>
                <div className='w-[30%]'>
                    allda
                </div>
             </div>

        </Container>
    </div>
  )
}

export default ProductDetails