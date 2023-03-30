import React from "react";
import WalletCard from "../components/WalletCard";

const WalletCardList = () => {
  return (
    <div className="flex flex-wrap items-center justify-center xl:justify-start gap-6 ml-8 w-full">
      <WalletCard />
      <WalletCard />
      <WalletCard />
      <WalletCard />
    </div>
  );
};

export default WalletCardList;
