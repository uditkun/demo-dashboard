import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
} from "chart.js";
Chart.register(CategoryScale, LinearScale, BarController, BarElement);
const BarChart = () => {
  const data = {
    labels: [
      "TATA 1918.K",
      "Tata Hyva 2518",
      "TATA LPK 3118",
      "Tata FL 5589",
      "TATA 2456",
      "Site 8",
    ],
    datasets: [
      {
        label: "Permits Made",
        data: [
          {
            label: "TATA 1918.K",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
          {
            label: "TATA Hyva 2518",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
          {
            label: "TATA LPK 3118",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
          {
            label: "Tata FL 5589",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
          {
            label: "TATA 2456",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
          {
            label: "Site 8",
            datasets: {
              data: [79, 56, 35],
              backgroundColor: ["blue", "orange", "red"],
            },
          },
        ],
        backgroundColor: "red",
      },
    ],
  };
  return <Bar data={data} />;
};

export default BarChart;
