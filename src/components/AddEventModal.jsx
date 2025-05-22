import React, { useState } from "react";

const AddEventModal = ({ date, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [color, setColor] = useState("#3b82f6");

  const handleSubmit = () => {
    if (!title || !startTime || !endTime) return;
    onSave({ title, startTime, endTime, color });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Add Event - {date}</h3>
        <input
          type="text"
          placeholder="Event title"
          className="border w-full p-2 mb-3"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="flex gap-2 mb-3">
          <input
            type="time"
            className="border p-2 w-full"
            value={startTime}
            onChange={e => setStartTime(e.target.value)}
          />
          <input
            type="time"
            className="border p-2 w-full"
            value={endTime}
            onChange={e => setEndTime(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <label>Color:</label>
          <input
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className="w-10 h-8"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleSubmit}>
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEventModal;
