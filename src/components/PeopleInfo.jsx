import React from "react";

const PeopleInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="px-2 py-1 text-center rounded-[1.5px] relative corner-cut text-white bg-[#8575E7]">
        over
      </div>
      <div className="flex gap-2 text-[#491782]">
        <span className="text-6xl">19</span>
        <span className="text-lg self-end">times</span>
      </div>
    </div>
  );
};

export default PeopleInfo;
