import React from "react";
import HeroSection from "../hero/HeroSection";
import PortFolioHistory from "../portfolioHistory/PortFolioHistory";
import Footer from "../footer/Footer";

const ChartPortfolio = () => {
  return (
    <div style={{marginRight:"30px", marginLeft:"100px"}} className="chartportfolioContainer">
      <HeroSection />
      <PortFolioHistory />
      <Footer />
    </div>
  );
};

export default ChartPortfolio;
