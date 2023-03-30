import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = () => {
  return (
    <FullCalendar
      height={"100%"}
      headerToolbar={{
        start: "prev,next,today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
    />
  );
};

export default Calender;
