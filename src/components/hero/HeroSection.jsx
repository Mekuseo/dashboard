import React from "react";
import "./HeroSection.scss";
import arrowRight from "../../asset/images/arrow-small-right.svg"
import personImage from "../../asset/images/user-phone.png";
import dollar from "../../asset/images/usd-circle.svg";
import arrowUp from "../../asset/images/arrow-small-up.svg";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Fed",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Mar",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Apr",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "May",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "June",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "July",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Aug",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Sep",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Oct",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Nov",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
  {
    month: "Dec",
    etf: Math.random() * 100,
    dollar: Math.random() * 100,
    portfolio: Math.random() * 100,
  },
];

const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dy={10}
      textAnchor="middle"
      fill="#666"
      style={{ fontSize: "10px" }}
    >
      {payload.value}
    </text>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="heroCard-left">
        <div>Upgrade your Account</div>
        <div>
          Access many other <br />
          features and helpful <br /> insights
        </div>
        <img src={arrowRight} alt="arrow" />
        <img src={personImage} alt="phone user" className="heroImage" />
      </div>

      <div className="chartBackground">
        <div className="chartTitle">
          <ul>
            <li>1d</li>
            <li>1w</li>
            <li>1m</li>
            <li>1y</li>
            <li>All</li>
          </ul>
          <img src={dollar} alt="dollar" style={{ width: "20px" }} />
        </div>
        <div className="heroPortfolioValue">
          <div>Portfolio value</div>
          <div>$ 9 864.34</div>
          <div>
            <img src={arrowUp} alt="arrow" style={{ width: "13px" }} /> 234.23
            (30.34%)
          </div>
        </div>
        <div className="heroCard-right">
          <ResponsiveContainer width="80%" height={150}>
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
            >
              <XAxis
                dataKey="month"
                tick={<CustomXAxisTick />}
                axisLine={false}
              />
              <YAxis hide={true} />
              <Tooltip
                contentStyle={{ background: "transparent ", border: "none" }}
                labelStyle={{}}
                cursor={false}
              />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="bottom"
                wrapperStyle={{ fontSize: "12px" }}
                iconSize={8}
              />
              <CartesianGrid vertical={false} horizontal={false} />
              <Bar
                dataKey="etf"
                stackId="a"
                fill="#fb5152"
                barSize={5}
                radius={[4, 4, 0, 0]}
                strokeDasharray="0"
              />
              <Bar
                dataKey="dollar"
                stackId="a"
                fill="#88d2f3"
                barSize={5}
                radius={[4, 4, 0, 0]}
                strokeDasharray="0"
              />
              <Bar
                dataKey="portfolio"
                stackId="a"
                fill="#0120f7"
                barSize={5}
                radius={[4, 4, 0, 0]}
                strokeDasharray="0"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
