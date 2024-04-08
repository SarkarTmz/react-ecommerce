import React, { useContext} from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection/>
        <Filter/>
      </Layout>
    </div>
  );
};

export default Home;
