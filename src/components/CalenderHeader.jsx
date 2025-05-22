import React from "react";
import dayjs from "dayjs";

const CalendarHeader = ({ month, year, onPrev, onNext, onToday }) => {
  const monthName = dayjs(`${year}-${month}-01`).format("MMMM");

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-blue-600 text-white rounded-t-xl">
      <h2 className="text-lg sm:text-2xl font-semibold">
        {monthName} {year}
      </h2>
      <div className="flex gap-2">
        <button
          onClick={onToday}
          className="bg-white text-blue-600 font-medium px-3 py-1 rounded hover:bg-blue-100 transition"
        >
          Today
        </button>
        <button
          onClick={onPrev}
          className="bg-white text-blue-600 font-bold px-2 py-1 rounded hover:bg-blue-100 transition"
        >
          &lt;
        </button>
        <button
          onClick={onNext}
          className="bg-white text-blue-600 font-bold px-2 py-1 rounded hover:bg-blue-100 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;