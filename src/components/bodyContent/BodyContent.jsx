import React from "react";
import Navbar from "../navbar/Navbar";
import ChartPortfolio from "../chartPortfolio/ChartPortfolio";

const BodyContent = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Navbar />
        <div style={{ position: "absolute", top: "100px", left: "50px" }}>
          <ChartPortfolio />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
