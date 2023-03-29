import React from "react";

const WalletCard = () => {
  return (
    <div className="flex flex-col gap-3 p-4 items-center max-w-[250px] w-full rounded-[20px] border border-shadow1">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-3">
          <span className="text-sm text-textBlack font-medium">My Wallet</span>
          <span className="font-bold text-lg">$865.2k</span>
        </div>
        <img src="images/wallet-detail.png" alt="graph" />
      </div>
      <div className="flex gap-2 self-start">
        <span className="font-semibold text-successDark bg-successLight p-[2px] text-xs">
          +$20.9k
        </span>
        <span className="text-sm">Since last week</span>
      </div>
    </div>
  );
};

export default WalletCard;
