import React from 'react'
import Banner from '../Component/Banner'
import FlashSales from '../Component/FlashSales'
import BrowseCategory from '../Component/BrowseCategory'


const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <FlashSales></FlashSales>
       <BrowseCategory></BrowseCategory>
    </div>
  )
}

export default Home