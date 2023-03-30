import React from "react";
import PeopleHighlight from "./PeopleHighlight";
import DoughnutCharts from "./DoughnutChartList";
import WalletList from "../components/WalletList";
import BarChart from "./BarChart";
import Calender from "./Calender";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  const failureData = [
    { label: "GearBox Oil Change", value: 12, backgroundColor: "#F9E6E2" },
    { label: "Fuel Indicator", value: 16, backgroundColor: "#F5D3D1" },
    { label: "Electronics glitches", value: 12, backgroundColor: "#F1BDC1" },
    { label: "Tyres replacement", value: 21, backgroundColor: "#ECA0B3" },
    { label: "Stock change", value: 16, backgroundColor: "#E57CA5" },
    { label: "Engine Oil Change", value: 15, backgroundColor: "#D55A9A" },
    { label: "Break hydraulic issue", value: 21, backgroundColor: "#D55A9A" },
    { label: "Engine clutch issue", value: 14, backgroundColor: "#9A277D" },
    { label: "Breake disc worn out", value: 22, backgroundColor: "#781C74" },
    { label: "Steering Issues", value: 18, backgroundColor: "#551469" },
  ];
  const data = {
    labels: failureData.map((data) => data.label),
    pluginFontSize: ["70px", "24px"],
    topText: "167",
    cutout: 125,
    legendFontSize: 12,
    doughnutWidth: "312px",
    datasets: [
      {
        label: "Total Failures",
        data: failureData.map((data) => data.value),
        backgroundColor: failureData.map((data) => data.backgroundColor),
      },
    ],
  };
  return (
    <div className="flex gap-4 flex-col items-center 2xl:flex-row 2xl:items-start">
      <div className="w-full lg:max-w-[1108px] flex flex-col">
        <PeopleHighlight />
        <DoughnutCharts />
        <WalletList />
        <BarChart />
      </div>
      <div className="max-w-[545px] flex flex-col gap-5">
        <div className="flex flex-col mt-7 rounded-[20px] border border-shadow1">
          <span className="text-xl font-medium rounded-t-lg bg-[#f6f6fa] px-6 py-2">
            AI-Assisted PM Scheduler
          </span>
          <div className="h-[410px] w-full p-5 pb-0">
            <Calender />
          </div>
        </div>
        <div className="p-5 border border-shadow1 rounded-[20px] flex flex-col gap-4">
          <span className="text-2xl ml-4">Top 10 most frequent failures</span>
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
