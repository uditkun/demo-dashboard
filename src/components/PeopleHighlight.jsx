import React from "react";
import { useState, useEffect } from "react";
import PeopleHighlightCard from "./PeopleHighlightCard";

const PeopleHighlight = () => {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSlide((slide) => {
        if (slide > 3) return 0;
        return slide + 1;
      });
    }, 2000);
  }, []);
  return (
    <section className="w-full flex gap-6 overflow-x-hidden py-7 px-8">
      <PeopleHighlightCard type="doughnut" slide={slide} />
      <PeopleHighlightCard slide={slide} />
      <PeopleHighlightCard slide={slide} />
      <PeopleHighlightCard type="doughnut" slide={slide} />
    </section>
  );
};

export default PeopleHighlight;
