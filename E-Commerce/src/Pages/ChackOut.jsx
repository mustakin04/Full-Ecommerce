import React from 'react'
import { useLocation } from 'react-router'

const ChackOut = () => {
    const location=useLocation()
    console.log(location)
  return (
    <div className='py-40'>
        <p> price:{location.state.sub}</p>
    </div>
  )
}

export default ChackOut