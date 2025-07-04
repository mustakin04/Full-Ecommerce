import React from 'react'

const Card = ({tittle}) => {
  return (
    <div>
        <div className='flex gap-[10px] items-center'>
                 <div className='w-[20px] h-[40px] bg-[#db4444] rounded-md  '></div>
                <h5 className='font-Poppins font-semibold text-[16px] text-[#db4444] '>{tittle}</h5>
        </div>
    </div>
  )
}

export default Card