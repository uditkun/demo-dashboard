import React from "react";

const Topbar = () => {
  return (
    <div className="@container flex flex-col justify-between @2xl:flex-row border border-[rgba(14, 37, 57, 0.1)]">
      <div className="flex px-8 py-5 flex-col justify-between items-center w-full gap-3 @5xl:flex-row @5xl:w-[1108px]">
        {/* SearchBar */}
        <div className="@5xl:max-w-[378px] w-full relative">
          <input className="w-full p-4 rounded-lg bg-searchBlue" type="text" />
          <button className="absolute right-2 mt-4">
            <img src="icons/searchIcon.svg" alt="search" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 w-full justify-end items-center">
          <select
            className="bg-textWhite p-4 max-w-[186px] w-full rounded"
            name="unit-name"
            id="unit-name"
            placeholder="Unit Name"
          >
            <option value="default">Unit Name</option>
            <option value="U1">U1</option>
            <option value="U2">U2</option>
            <option value="U3">U3</option>
          </select>
          <select
            className="bg-textWhite p-4 max-w-[186px] w-full rounded"
            name="unit-name"
            id="unit-name"
            placeholder="Unit Name"
          >
            <option value="default">Unit Name</option>
            <option value="U1">U1</option>
            <option value="U2">U2</option>
            <option value="U3">U3</option>
          </select>
          <select
            className="bg-textWhite p-4 max-w-[186px] w-full rounded"
            name="unit-name"
            id="unit-name"
            placeholder="Unit Name"
          >
            <option value="default">Unit Name</option>
            <option value="U1">U1</option>
            <option value="U2">U2</option>
            <option value="U3">U3</option>
          </select>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center w-fit gap-4 self-end -order-1 @2xl:self-start @2xl:order-1 @2xl:min-w-[275px] @2xl:max-w-[380px] max-h-[92px]">
        <span className="rounded-full min-w-[48px] min-h-[48px] w-12 h-12 flex justify-center items-center border border-logoBlue">
          <img className="mx-auto w-1/2" src="icons/bell.svg" alt="bell" />
        </span>
        <div className="w-full flex gap-2 justify-between items-center px-[17px] py-[22px] bg-searchBlue">
          <span>
            <img src="images/userProfile.png" alt="avatar" />
          </span>
          <span>Hello Nihar</span>
          <span>
            <img src="icons/arrow-down.svg" alt="arrow-down" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
