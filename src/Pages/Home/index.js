import React from 'react'
import BannerImages from '../../components/BannerImages'
import CollectionSlider from '../../components/CollectionSlider'
import Features from '../../components/Features'
import LatestProducts from '../../components/LatestProducts'
import SliderComponent from '../../components/SliderComponent'
import SubCategories from '../../components/SubCategories'
import SubscribeSection from '../../components/SubscribeSection'

function Home() {
  return (
    <>
        <SliderComponent/>
        <CollectionSlider/>
        <LatestProducts/> 
        <SubCategories/>
        <BannerImages/> 
        <SubscribeSection/>
        <Features/>
    </>
  )
}

export default Home