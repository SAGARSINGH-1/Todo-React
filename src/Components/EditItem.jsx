import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

function EditItem({ item, onSave, onCancel }) {
  const [selectedDate, setSelectedDate] = useState(item.deadline);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [work, setWork] = useState(item.work);
  const [study, setStudy] = useState(item.study);
  const [entertainment, setEntertainment] = useState(item.entertainment);
  const [family, setFamily] = useState(item.family);

  function submitHandler(e) {
    e.preventDefault();

    if (title && description) {
      onSave({
        ...item,
        title,
        description,
        deadline: selectedDate,
        work,
        study,
        entertainment,
        family,
      });
      toast.success('Task Updated Successfully');
      onCancel();
    } else {
      toast.error('Please fill in all fields.');
    }
  }

  function filterApply(value) {
    // Determine which filter to toggle based on the provided value
    switch (value) {
      case 'work':
        setWork(!work);
        break;
      case 'study':
        setStudy(!study);
        break;
      case 'entertainment':
        setEntertainment(!entertainment);
        break;
      case 'family':
        setFamily(!family);
        break;
      default:
        break;
    }
  }

  return (
    <div className={`text-5xl absolute top-[20%] left-[32%]`}>
    <div className="bg-sky-100 p-6 w-max box-border">
      <h1 className="font-CormorantGaramond border-b-4 border-white font-bold text-5xl selection:bg-none">Edit Todo</h1>
      <form onSubmit={submitHandler} className="mt-2 p-2">
        <div className='flex gap-1 justify-between items-center'>
          <input
            type='text'
            id='title'
            name='title'
            placeholder='Enter the Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='text-3xl p-1 rounded-lg'
          />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            timeCaption='Time'
            dateFormat='MMMM d, yyyy'
            placeholderText='Select a deadline'
            className='text-xl mb-3 py-2 px-2 rounded-lg'
          />
        </div>
        <div className='mb-4 py-1'>
          <textarea
            id='description'
            name='description'
            placeholder='Enter the Description...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='text-xl w-full h-[150px] px-2 rounded-lg'
          />
        </div>
        <div className="flex gap-4 justify-center mb-4">
          <p onClick={() => filterApply('work')} className={`cursor-pointer w-8 h-8 bg-purple-400 ${work ? 'border-[2px] border-black' : ''} rounded-full`}></p>
          <p onClick={() => filterApply('study')} className={`cursor-pointer w-8 h-8 bg-sky-300 ${study ? 'border-[2px] border-black' : ''} rounded-full`}></p>
          <p onClick={() => filterApply('entertainment')} className={`cursor-pointer w-8 h-8 bg-pink-300 ${entertainment ? 'border-[2px] border-black' : ''} rounded-full`}></p>
          <p onClick={() => filterApply('family')} className={`cursor-pointer w-8 h-8 bg-red-600 ${family ? 'border-[2px] border-black' : ''} rounded-full`}></p>
        </div>
        <div className='flex justify-center'>
          <button
            type='submit'
            className='w-[30%] text-center text-xl h-10 text-white bg-sky-500 rounded hover:bg-sky-600 focus:outline-none focus:ring'
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default EditItem;
