import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const chartSize = {
  width: 900, // Set your desired width here
  height: 150, // Set your desired height here
};

const StyledText = styled("text")({
  fill: "black",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
});

function PieCenterLabel({ children }) {
  return (
    <StyledText x={chartSize.width / 2} y={chartSize.height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartBox() {
  return (
    <div style={{ width: chartSize.width, height: chartSize.height }}>
      <PieChart series={[{ data }]} width={chartSize.width} height={chartSize.height}>
        <PieCenterLabel>07 Companies</PieCenterLabel>
      </PieChart>
    </div>
  );
}
