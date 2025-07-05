import React from 'react'
import Banner from '../Component/Banner'
import FlashSales from '../Component/FlashSales'
import BrowseCategory from '../Component/BrowseCategory'
import BestSell from '../Component/BestSell'
import Music from '../Component/Music'
import Explore from '../Component/Explore'
import NewArrival from '../Component/NewArrival'
import Delivery from '../Component/Delivery'


const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <FlashSales></FlashSales>
       <BrowseCategory></BrowseCategory>
       <BestSell></BestSell>
       <Music></Music>
       <Explore></Explore>
       <NewArrival></NewArrival>
       <Delivery></Delivery>
    </div>
  )
}

export default Home