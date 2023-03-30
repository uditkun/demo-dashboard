import React from "react";
import { useState, useEffect } from "react";
import PeopleHighlightCard from "./PeopleHighlightCard";

const PeopleHighlight = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlide((slide) => {
        if (slide >= 3) return 0;
        return slide + 1;
      });
    }, 2000);
  }, []);
  const data1 = {
    name: "Rahul Yadav",
    role: "Electrical Maintenance",
    description: "Max LOTO done in last month",
    dataNumber: 19,
  };
  const data2 = {
    name: "Ankit Jha",
    role: "Mechanical Maintenance",
    description: "Maximum permits created in last month",
    dataNumber: 35,
  };
  return (
    <section className="w-full flex gap-6 overflow-x-hidden py-7 px-8">
      <PeopleHighlightCard type="doughnut" slide={slide} data={data2} />
      <PeopleHighlightCard slide={slide} data={data1} />
      <PeopleHighlightCard slide={slide} data={data1} />
      <PeopleHighlightCard type="doughnut" slide={slide} data={data2} />
    </section>
  );
};

export default PeopleHighlight;
