import React from 'react'
import Banner from '../Component/Banner'
import FlashSales from '../Component/FlashSales'
import BrowseCategory from '../Component/BrowseCategory'
import BestSell from '../Component/BestSell'


const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <FlashSales></FlashSales>
       <BrowseCategory></BrowseCategory>
       <BestSell></BestSell>
    </div>
  )
}

export default Home