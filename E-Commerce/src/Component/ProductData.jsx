import React from 'react'
import { FaDollarSign } from "react-icons/fa";
const ProductData = ({product}) => {
  console.log(product,"4")
  return (
    <div className='w-[270px] mt-[7px]'>
         <div>
            <h4 className='font-Poppins font-medium text-[16px] text-black'>
                ok coll</h4>
            <div className='flex  gap-[12px] mt-[8px]'>
                <div className='flex items-center font-Poppins font-medium text-[16px] text-[#db4444] '>
                    <FaDollarSign />
                    <span >120</span>
                </div>
                <div className='relative flex items-center font-Poppins font-medium text-[16px]'>
                    <FaDollarSign />
                    <span>160</span>
                    <div className='absolute w-full h-1 bg-black'></div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default ProductData