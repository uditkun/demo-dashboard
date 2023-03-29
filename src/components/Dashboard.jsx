import React from "react";
import PeopleHighlight from "./PeopleHighlight";
import DoughnutCharts from "./DoughnutChartList";
import WalletList from "../components/WalletList";
import BarChart from "./BarChart";

const Dashboard = () => {
  return (
    <div className="max-w-[1108px] flex gap-2 flex-col">
      <PeopleHighlight />
      <DoughnutCharts />
      <WalletList />
      {/* <BarChart/> */}
    </div>
  );
};

export default Dashboard;
