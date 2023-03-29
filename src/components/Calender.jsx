import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridWeek from "@fullcalender/timeGridWeek";
// import timeGridDay from "@fullcalender/timeGridDay";

const Calender = () => {
  return (
    <FullCalendar
      height={"100%"}
      headerToolbar={{
        start: "prev,next,today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      plugins={[dayGridPlugin]}
    />
  );
};

export default Calender;
