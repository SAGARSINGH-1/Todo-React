// EditItem.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

function EditItem({ item, onSave, onCancel }) {
  const [selectedDate, setSelectedDate] = useState(item.deadline);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  function handleSave() {
    if (title && description && selectedDate) {
      onSave({
        ...item,
        title,
        description,
        deadline: selectedDate,
      });
      toast.success('Task Updated Successfully');
      onCancel();
    } else {
      toast.error('Please fill in all fields.');
    }
  }

  return (
    <div className="bg-sky-100 w-max p-6 rounded-lg shadow-lg absolute top-4 right-[30%]">
      <h1 className="font-CormorantGaramond font-bold text-5xl selection:bg-none">Edit Todo</h1>
      <form className="my-2">
        <div className="mb-4">
          <label htmlFor="title" className="block text-4xl text-gray-700 font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-10 px-3 rounded border focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 font-semibold">
            Deadline:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full h-10 px-3  rounded border focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter the Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-32 px-3 py-2 rounded border focus:outline-none focus:ring focus:border-sky-500"
          />
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="w-full h-12 text-white bg-sky-500 rounded hover:bg-sky-600 focus:outline-none focus:ring"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="w-full h-12 mt-2 text-white bg-gray-400 rounded hover:bg-gray-500 focus:outline-none focus:ring"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditItem;
