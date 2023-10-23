import React from "react";
import Navbar from "../navbar/Navbar";
import ChartPortfolio from "../chartPortfolio/ChartPortfolio";

const BodyContent = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="bodyContentFloat">
          <ChartPortfolio />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
