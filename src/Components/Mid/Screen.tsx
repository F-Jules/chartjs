import React, { useState } from "react";
import dataChart from "../../Assets/chart.json";
import Chart from "react-apexcharts";
import moment, { Moment } from "moment";

export const Screen: React.SFC<{}> = () => {
  const endDate = (startDate: string, duration: string): string => {
    return moment(startDate, "YYYY-MM-DD")
      .add("days", Number(duration))
      .format();
  };

  const dataProducts = dataChart.products.map(el => {
    return {
      x: el.name,
      y: [
        new Date(el.start).getTime(),
        new Date(endDate(el.start, el.duration_days)).getTime()
      ],
      fillColor: el.color
    };
  });
  console.log(dataProducts);
  const [optionState, setOptionState] = useState({
    options: {
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      yaxis: {
        min: new Date(dataChart.campaign.start).getTime(),
        max: new Date(dataChart.campaign.launch).getTime()
      },
      xaxis: {
        type: "datetime"
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      }
    }
  });
  const [dataState, setDataState] = useState({
    series: [
      {
        data: [...dataProducts]
      }
    ]
  });
  return (
    <div id="chart">
      <Chart
        options={optionState.options}
        series={dataState.series}
        type="rangeBar"
        height="350"
      />
    </div>
  );
};
