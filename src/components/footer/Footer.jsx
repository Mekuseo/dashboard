import React from "react";
import apple from "../../asset/images/apple.svg";
import "./Footer.scss";

const footerData = [
  {
    title: "PRICE",
    price: "= $234.00",
  },
  {
    title: "% RETURN",
    price: "= $45.43",
  },
  {
    title: "PRICE",
    price: "= $234.00",
  },
  {
    title: "TOTAL NET COST",
    price: "= $1 234.00",
  },
  {
    title: "MARKET VALUE",
    price: "= $1 345.87",
  },
  {
    title: "TOTAL GAIN",
    price: "= $456.34",
  },
  {
    title: "DAILY GAIN",
    price: "= -$3.45",
  },
  {
    title: "% PORTFOLIO",
    price: "= $13.45",
  },
];

const Footer = () => {
  return (
    <div className="footerContainer">
      <div>
        <div className="footerSymbol">SYMBOL</div>
        <div className="appleFlex">
          <div className="apple">
            <img src={apple} alt="apple" style={{ width: "15px" }} />
          </div>{" "}
          AAPL
        </div>
      </div>

      {footerData.map((item, index) => {
        return (
          <div key={index}>
            <div className="footerTitle">{item.title}</div>
            <div className="footerScores">{item.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
