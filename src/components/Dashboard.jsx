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
    { label: "Storck change", value: 16, backgroundColor: "#E57CA5" },
    { label: "Engine Oil Change", value: 15, backgroundColor: "#D55A9A" },
    { label: "Break hydraulic issue", value: 21, backgroundColor: "#D55A9A" },
    { label: "Engine clutch issue", value: 14, backgroundColor: "#9A277D" },
    { label: "Breake disc worn out", value: 22, backgroundColor: "#781C74" },
    { label: "Steering Issues", value: 18, backgroundColor: "#551469" },
  ];
  const data = {
    labels: failureData.map((data) => data.label),
    fontSize: "70px",
    topText: "167",
    cutout: "110",
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
    <div className="flex gap-4">
      <div className="max-w-[1108px] flex gap-2 flex-col">
        <PeopleHighlight />
        <DoughnutCharts />
        <WalletList />
        {/* <BarChart/> */}
      </div>
      <div className="max-w-[545px] flex flex-col gap-5">
        <div className="h-[410px] w-full">
          <Calender />
        </div>
        <div className="p-5 border border-shadow1 rounded-[20px] flex flex-col gap-4">
          <span className="text-2xl">Top 10 most frequest failures</span>
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
