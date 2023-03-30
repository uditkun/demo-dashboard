import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getHorizontalLinePlugin = (num, color = "red", value) => {
  return {
    id: "horizontalLinePlugin",
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { width, left, height },
      } = chart;
      const getPercentPos = height - (height / 100) * num + 10;
      const arrowCircleUp = document.getElementById("arrow-circle-top");
      ctx.save();
      ctx.strokeStyle = color;
      ctx.setLineDash([5, 10]);
      ctx.strokeRect(left, getPercentPos, width, 0);
      ctx.fillStyle = color;
      ctx.font = `11px Poppins`;
      ctx.fillText("Avg. " + value, width * 1.1, getPercentPos);
      ctx.drawImage(arrowCircleUp, width * 1.1 + 50, getPercentPos - 8, 15, 15);
      ctx.restore();
    },
  };
};

const options = {
  responsive: true,
  barPercentage: 0.4,
  barThickness: 16,
  borderWidth: 2,
  borderColor: "transparent",
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
      grace: "5%",
      title: {
        display: true,
        text: "Quantity",
        padding: 10,
        color: "#001b33",
        font: {
          weight: "bold",
          size: 16,
        },
      },
      ticks: {
        steps: 10,
        stepValue: 10,
      },
    },
    x: {
      title: {
        display: true,
        text: "Permits Made",
        align: "start",
        padding: 10,
        color: "#001b33",
        font: {
          weight: "bold",
          size: 16,
        },
      },
    },
  },
  layout: {
    padding: {
      right: 100,
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "rectRounded",
      },
    },
  },
};
const BarChart = () => {
  const barData = [
    {
      label: "TATA 1918.K",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "TATA Hyva 2518",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "TATA LPK 3118",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "TATA Prima 25118",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "TATA 5530.s",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "Tata FL 5589",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "TATA 2456",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
    {
      label: "Site 8",
      value: {
        "#5575a2": "76",
        "#e39142": "56",
        "#cf6056": "38",
      },
    },
  ];
  const data = {
    labels: barData.map((data) => data.label),
    datasets: [
      {
        label: "Cost(INR)",
        data: barData.map((data) => data.value["#5575a2"]),
        backgroundColor: "#5575a2",
      },
      {
        label: "Number of Breakdowns",
        data: barData.map((data) => data.value["#e39142"]),
        backgroundColor: "#e39142",
      },
      {
        label: "Fuel Consumption",
        data: barData.map((data) => data.value["#cf6056"]),
        backgroundColor: "#cf6056",
      },
    ],
  };
  return (
    <div className="ml-8 my-4 px-5 py-4 border border-shadow1 rounded-[20px]">
      <div className="flex justify-around items-center">
        <div className="text-[25px] flex gap-5 items-center">
          <span className="font-medium">Total Permits Made</span>
          <div className="text-red-500 flex gap-[10px] items-center">
            <span className="font-bold">89</span>
            <span>10%</span>
            <span>
              <img
                id="arrow-circle-top"
                src="icons/arrow-circle-top.svg"
                alt="up"
              />
            </span>
          </div>
        </div>
        <div className="text-[25px] flex gap-5 items-center">
          <span className="font-medium">Avg PTW Downtime</span>
          <div className="text-red-500 flex gap-[10px] items-center">
            <span className="font-bold">25 min</span>
            <span>18%</span>
            <span>
              <img src="icons/arrow-circle-top.svg" alt="up" />
            </span>
          </div>
        </div>
      </div>
      <Bar
        data={data}
        options={options}
        plugins={[
          getHorizontalLinePlugin(47, "#5575a2", "45%"),
          getHorizontalLinePlugin(60, "#e39142", "23%"),
          getHorizontalLinePlugin(28, "#cf6056", "17%"),
        ]}
      />
    </div>
  );
};

export default BarChart;
