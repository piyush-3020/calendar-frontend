import React, { useState } from "react";
import dayjs from "dayjs";
import CalendarHeader from "./components/CalenderHeader";
import CalendarGrid from "./components/CalendarGrid";
import AddEventModal from "./components/AddEventModal";
import eventsData from "./data/events";

const App = () => {
  const today = dayjs();
  const [month, setMonth] = useState(today.month() + 1);
  const [year, setYear] = useState(today.year());
  const [events, setEvents] = useState(eventsData);
  const [modalDate, setModalDate] = useState(null);

  const goToToday = () => {
    setMonth(today.month() + 1);
    setYear(today.year());
  };

  const handleAddEvent = (event) => {
    if (modalDate) {
      const fullEvent = { ...event, date: modalDate };
      setEvents((prev) => [...prev, fullEvent]);
      setModalDate(null);
    }
  };

  const handlePrev = () => {
    if (month === 1) {
      setMonth(12);
      setYear((prevYear) => prevYear - 1);
    } else {
      setMonth((prevMonth) => prevMonth - 1);
    }
  };

  const handleNext = () => {
    if (month === 12) {
      setMonth(1);
      setYear((prevYear) => prevYear + 1);
    } else {
      setMonth((prevMonth) => prevMonth + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 shadow-lg rounded-xl overflow-hidden">
      <CalendarHeader
        month={month}
        year={year}
        onPrev={handlePrev}
        onNext={handleNext}
        onToday={goToToday}
      />
      <CalendarGrid
        month={month}
        year={year}
        events={events}
        onDateClick={setModalDate}
      />
      {modalDate && (
        <AddEventModal
          date={modalDate}
          onClose={() => setModalDate(null)}
          onSave={handleAddEvent}
        />
      )}
    </div>
  );
};

export default App;
