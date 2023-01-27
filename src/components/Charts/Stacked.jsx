import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="stacked-chart"
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooptip={{ enable: true }}
      legendSettings={{ background: currentMode === "Dark" ? "gray" : "white" }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
