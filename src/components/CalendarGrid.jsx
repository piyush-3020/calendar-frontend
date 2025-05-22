import React from "react";
import dayjs from "dayjs";

const getDaysInMonthGrid = (month, year) => {
  const start = dayjs(`${year}-${month}-01`);
  const days = [];

  const startDay = start.day();
  const totalDays = start.daysInMonth();

  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= totalDays; d++) days.push(dayjs(`${year}-${month}-${d}`));

  return days;
};

const CalendarGrid = ({ month, year, events, onDateClick }) => {
  const days = getDaysInMonthGrid(month, year);
  const today = dayjs().format("YYYY-MM-DD");

  const getEventsForDate = (date) =>
    events.filter((ev) => ev.date === date.format("YYYY-MM-DD"));

  return (
    <div className="grid grid-cols-7 gap-1 bg-gray-100 p-2">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
        <div key={day} className="text-center font-semibold text-gray-600">
          {day}
        </div>
      ))}
      {days.map((date, idx) => {
        const isToday = date?.format("YYYY-MM-DD") === today;
        const eventsForDate = date ? getEventsForDate(date) : [];

        return (
          <div
            key={idx}
            className={`min-h-[120px] max-h-[120px] overflow-y-auto p-1 border rounded-md relative hover:bg-blue-50 transition flex flex-col ${
              isToday
                ? "border-4 border-blue-600 bg-purple-300 shadow-lg"
                : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold">{date?.date()}</div>
              {date && !date.isBefore(dayjs(), "day") && (
                <button
                  onClick={() => onDateClick(date.format("YYYY-MM-DD"))}
                  className={`text-xs font-medium hover:underline ${
                    isToday ? "text-white" : "text-blue-600"
                  }`}
                >
                  Add Event
                </button>
              )}
            </div>
            <div className="mt-1 flex-1 overflow-y-auto">
              {eventsForDate.map((event, index) => (
                <div
                  key={index}
                  className="mt-1 p-1 rounded text-xs text-white"
                  style={{ backgroundColor: event.color }}
                >
                  <div className="truncate font-semibold">{event.title}</div>
                  <div className="text-[10px]">
                    {event.startTime} - {event.endTime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarGrid;
