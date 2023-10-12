import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AddList() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className='bg-sky-100 w-[400px] p-6 rounded-lg shadow-lg'>
            <h1 className='text-3xl font-bold mb-4'>New Todo</h1>
            <form onClick={(e) => e.preventDefault()}>
                <div className='mb-4'>
                    <label htmlFor='title' className='block text-gray-700 font-semibold'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        placeholder='Enter the Title'
                        className='w-full h-10 px-3 rounded border focus:outline-none focus:ring focus:border-sky-500'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='deadline' className='block text-gray-700 font-semibold'>Deadline:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        showTimeSelect
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        timeCaption='Time'
                        dateFormat='MMMM d, yyyy h:mm aa'
                        className='w-full h-10 px-3 rounded border focus:outline-none focus:ring focus:border-sky-500'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='description' className='block text-gray-700 font-semibold'>Description:</label>
                    <textarea
                        id='description'
                        placeholder='Enter the Description'
                        className='w-full h-32 px-3 py-2 rounded border focus:outline-none focus:ring focus:border-sky-500'
                    />
                </div>
                <button
                    type='submit'
                    className='w-full h-12 text-white bg-sky-500 rounded hover:bg-sky-600 focus:outline-none focus:ring'
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddList;
