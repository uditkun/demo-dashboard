import React from "react";
import PeopleInfo from "../components/PeopleInfo";

const PeopleHighlightCard = ({ type, slide, data }) => {
  return (
    <div
      className="flex flex-col gap-2 transition-block"
      style={{ transform: `translateX(-${slide * 106}%)` }}
    >
      <div className="w-[522px] h-[150px] flex basis-full gap-2 justify-between items-center border border-shadow1 bg-white rounded-[20px] p-4">
        {type === "doughnut" ? (
          <div className="min-w-[100px] min-h-[100px] rounded-full flex justify-center items-center border-[15px] border-[#8575E7]">
            {data.dataNumber}
          </div>
        ) : (
          <PeopleInfo dataNumber={data.dataNumber} />
        )}
        <div>
          <h4 className="text-2xl font-semibold">{data.name}</h4>
          <p>{data.role}</p>
        </div>
        <div>
          <img src="icons/big-arrow-right.svg" alt="right-arrow" />
        </div>
      </div>
      <span>{data.description}</span>
    </div>
  );
};

export default PeopleHighlightCard;
