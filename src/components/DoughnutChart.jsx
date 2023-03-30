import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const getCenterTextPlugin = (topText, bottomText, font = ["20px", "10px"]) => {
  return {
    id: "centerTextPlugin",
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;
      ctx.save();
      ctx.fillStyle = "#001B33";
      ctx.font = `${font[0]} Poppins`;
      (ctx.textAlign = "center"), ctx.fillText(topText, width / 2, height / 2);
      ctx.font = `${font[1]} Poppins`;
      ctx.fillText(bottomText, width / 2, height / 2 + 20);
    },
  };
};

const DoughnutChart = ({ data }) => {
  const plugins = [
    getCenterTextPlugin(
      data.topText,
      data.datasets[0].label,
      data.pluginFontSize
    ),
  ];
  const options = {
    reponsive: true,
    cutout: data.cutout ?? 47,
    plugins: {
      legend: {
        display: false,
      },
    },
    datasets: {
      doughnut: {
        borderWidth: 0,
      },
    },
  };

  return (
    <div className="flex items-center gap-[10px]">
      <div style={{ width: data.doughnutWidth }}>
        <Doughnut data={data} options={options} plugins={plugins} />
      </div>
      <ul className="flex flex-col gap-5">
        {data.labels.map((label, index) => {
          return (
            <li key={label} className="flex items-center gap-2">
              <span
                style={{
                  backgroundColor: `${data.datasets[0].backgroundColor[index]}`,
                }}
                className="w-[20px] h-[20px] rounded"
              ></span>
              <span style={{ fontSize: data.legendFontSize ?? 16 }}>
                {label}: {data.datasets[0].data[index]}%
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DoughnutChart;
