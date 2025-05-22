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
      setEvents(prev => [...prev, fullEvent]);
      setModalDate(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-6 shadow-lg rounded-xl overflow-hidden">
      <CalendarHeader
        month={month}
        year={year}
        onPrev={() => setMonth(prev => prev === 1 ? (setYear(y => y - 1), 12) : prev - 1)}
        onNext={() => setMonth(prev => prev === 12 ? (setYear(y => y + 1), 1) : prev + 1)}
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
