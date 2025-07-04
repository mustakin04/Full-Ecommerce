import React from 'react'

const Discount = ({tittle}) => {
  return (
    <div className='absolute top-3 left-4 !flex justify-center items-center w-[55px] rounded-md bg-[#db4444] text-[12px] text-white font-Poppins font-normal py-[4px] px-[12px]'>
      <p> {tittle}</p> 
    </div>
  )
}

export default Discount