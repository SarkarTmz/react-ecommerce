import React, { useContext} from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <Category/>
        <Filter/>
        <HomePageProductCard/>
        <Track/>
        <Testimonial/>
      </Layout>
    </div>
  );
};

export default Home;
