import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { useState } from "react";
import { useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
Chart.register(ArcElement, Tooltip);

const getCenterTextPlugin = (topText, bottomText) => {
  return {
    id: "centerTextPlugin",
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      ctx.save();
      ctx.fillStyle = "#001B33";
      ctx.font = "20px Poppins";
      (ctx.textAlign = "center"), ctx.fillText(topText, width / 2, height / 2);
      ctx.font = "10px Poppins";
      ctx.fillText(bottomText, width / 2, height / 2 + 20);
    },
  };
};

const centerTextPlugin = {
  id: "centerTextPlugin",
  beforeDraw(chart) {
    const {
      ctx,
      chartArea: { width, height },
    } = chart;
    ctx.save();
    ctx.fillStyle = "#001B33";
    ctx.font = "20px Poppins";
    (ctx.textAlign = "center"), ctx.fillText("87%", width / 2, height / 2);
    ctx.font = "10px Poppins";
    ctx.fillText("By MM Team", width / 2, height / 2 + 20);
  },
};

const doughnutData = [
  {
    labels: ["Operational", "Mechanical", "Electrical"],
    topText: "87%",
    doughnutWidth: 120,
    datasets: [
      {
        label: "By MM Team",
        data: ["07", "67", "26"],
        backgroundColor: ["#BB3B8A", "#9A277D", "#781C74"],
      },
    ],
  },
  {
    labels: ["Hot Work", "work at height", "confined space"],
    topText: "87%",
    doughnutWidth: 120,
    datasets: [
      {
        label: "Hot Work",
        data: ["07", "67", "26"],
        backgroundColor: ["#BB3B8A", "#9A277D", "#781C74"],
      },
    ],
  },
  {
    labels: ["Created", "Isolated", "WIP"],
    topText: "87%",
    doughnutWidth: 120,
    datasets: [
      {
        label: "WIP",
        data: ["07", "67", "26"],
        backgroundColor: ["#BB3B8A", "#9A277D", "#781C74"],
      },
    ],
  },
];

const DoughnutChartList = () => {
  return (
    <div className="pl-8 pb-4 pt-0">
      <div className="flex flex-col gap-7 w-fit mx-auto xl:mx-0 xl:flex-row py-4 px-[20px] rounded-[20px] xl:justify-between xl:gap-2 xl:w-full border border-shadow1">
        {doughnutData.map((data) => {
          return <DoughnutChart key={data.datasets[0].label} data={data} />;
        })}
      </div>
    </div>
  );
};

export default DoughnutChartList;
