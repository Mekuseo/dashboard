import React, { useEffect } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";

const data = [
  { value: 5, label: "A" },
  { value: 10, label: "B" },
  { value: 15, label: "C" },
  { value: 20, label: "D" },
];

const initialSize = {
  width: 450,
  height: 200,
};

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

const StyledText = styled("text")({
  fill: "white",
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 20,
});

const PieChartBox = () => {
  const [size, setSize] = React.useState(initialSize);

  const updateSize = () => {
    if (window.innerWidth <= 1024) {
      setSize({ width: 300, height: 100 });
    } else {
      setSize(initialSize);
    }
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <PieChart series={[{ data, innerRadius: 80 }]}>
      <PieCenterLabel>07 Companies</PieCenterLabel>
    </PieChart>
  );
};

export default PieChartBox;
