import React from 'react';
import FeaturedProductSection from '../components/homePage/Product.tsx';
import HomeBannerComponent from "../components/homePage/Banner.tsx";

const Home = () => {
  return (
    <>
    <HomeBannerComponent/>
    <FeaturedProductSection/>
    </>
  )
}

export default Home;