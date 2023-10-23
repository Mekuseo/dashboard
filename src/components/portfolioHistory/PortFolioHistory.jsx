import "./PortFolioHistory.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import arrowDown from "../../asset/images/arrowDown.svg";
import arrowUp from "../../asset/images/arrow-small-up.svg";
import PieChartBox from "../PieChartBox";

const generateRandomData = () => {
  const data = [];
  for (let i = 1; i <= 5; i++) {
    data.push({
      name: `Page ${i}`,
      uv: Math.random() * 5000,
      pv: Math.random() * 3000,
      amt: Math.random() * 3000,
    });
  }
  return data;
};

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
          const valueColor = isPositive ? "#21B4B1" : "red";

          return (
            <div key={index}>
              <div className="portfolioCard">
                <div>{item.date}</div>
                <div className="dateUnderline"></div>
                <div className="chart">
                  <ResponsiveContainer>
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
                      <span
                        style={{ color: valueColor, fontSize: "12px" }}
                        className="percentScore"
                      >
                        {item.portfolioChangePercentage}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundColor: "blue",
          borderRadius: "20px",
          marginBottom: "15px",
          position: "relative",
        }}
        className="pieStyle"
      >
        <PieChartBox />
      </div>
    </div>
  );
};

export default PortFolioHistory;
