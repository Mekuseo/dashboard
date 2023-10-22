import React from "react";
import "./PortFolioHistory.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import arrowDown from "../../asset/images/arrowDown.svg";
import arrowUp from "../../asset/images/arrow-small-up.svg";
import { PieChart, Pie, Sector, Cell } from "recharts";

const generateRandomData = () => {
  // Generate random data for the LineChart
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      name: `Page ${i}`,
      uv: Math.random() * 5000, // Change these values to generate random data
      pv: Math.random() * 3000,
      amt: Math.random() * 3000,
    });
  }
  return data;
};

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
  { name: "Group F", value: 200 },
  { name: "Group G", value: 200 },
];
const COLORS = ["#B731F3", "#00AAA7", "#B2DFBA", "#FF8042", "#FB5253", "#F291F5", "#FEBD2E"];

const portfolioData = [
  {
    date: "NOV 19",
    portfolioValue: "$ 9 864.34",
    portfolioChangePercentage: "234.23 (30.34%)",
  },
  {
    date: "OCT 19",
    portfolioValue: "$ 7 845.32",
    portfolioChangePercentage: "143.56 (15.43%)",
  },
  {
    date: "SEP 19",
    portfolioValue: "$ 7 453.45",
    portfolioChangePercentage: "-134.23 (-8.34%)",
  },
];

const PortFolioHistory = () => {
  const convertPercentageToNumber = (portfolioChangePercentage) => {
    const percentageChange = parseFloat(
      portfolioChangePercentage.match(/[-\d.]+/)[0]
    );
    return percentageChange;
  };

  return (
    <div className="portfolioContainer">
      <div className="portfolioSection-title">
        <div>Portfolio History</div>
        <div>Per Industry</div>
      </div>
      <div className="PortfolioContainer-cards">
        {portfolioData.map((item, index) => {
          const chartData = generateRandomData();
          const percentageChange = convertPercentageToNumber(
            item.portfolioChangePercentage
          );
          const isPositive = percentageChange >= 0;
          const arrowImage = isPositive ? arrowUp : arrowDown;
          const valueColor = isPositive ? "green" : "red";

          return (
            <div key={index}>
              <div className="portfolioCard">
                <div>{item.date}</div>
                <div className="dateUnderline"></div>
                <div className="chart">
                  <ResponsiveContainer width="100%" height={100}>
                    <LineChart data={chartData}>
                      <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                    <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="portfolioData">
                  <div>Portfolio Value</div>
                  <div>{item.portfolioValue}</div>
                  {item.portfolioChangePercentage && (
                    <div className="portfolioPercent">
                      <img
                        src={arrowImage}
                        alt="arrow"
                        style={{ width: "15px" }}
                      />
                      <span style={{ color: valueColor, fontSize: "12px" }}>
                        {item.portfolioChangePercentage}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div style={{ backgroundColor: "blue", borderRadius:"20px", marginBottom:"15px", position:"relative" }}>
          <PieChart width={300} height={240}>
            <Pie
              data={pieChartData}
              cx={140}
              cy={110}
              innerRadius={60}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
              cursor="pointer"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div style={{position:"absolute", top:"90px", left:"100px", color: "white", textAlign:"center"}}><span style={{fontWeight:"700", fontSize:"20px"}}>07</span> <br />INDUSTRIES</div>
        </div>
      </div>
    </div>
  );
};

export default PortFolioHistory;
