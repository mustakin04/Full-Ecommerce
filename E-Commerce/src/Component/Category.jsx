import React from 'react'

const Category = ({icon,tittle}) => {
  return (
    <div className='w-[170px] h-[145px] flex justify-center items-center border-[1px]
     border-black hover:bg-[#db4444]'>
       <div>
        <p className='text-4xl text-center pl-[7px]'>{icon}</p>
        <p className='font-Poppins font-normal text-[16px] text-black mt-[16px]'>{tittle}</p>
       </div>
    </div>
  )
}

export default Category