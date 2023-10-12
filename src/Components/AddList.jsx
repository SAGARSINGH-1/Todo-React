import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

function AddList({ setData }) {
    const [selectedDate, setSelectedDate] = React.useState(null);

    function submitHandler(e) {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const deadline = selectedDate;

        if (title && description && deadline) {
            const newData = {
                id: Math.random(),
                title: title,
                description: description,
                deadline: deadline,
                checked: false,
            };

            // Update the parent component's data
            setData((prevData) => [...prevData, newData]);
        }
    }

    return (
        <div className="bg-sky-100 w-max p-6 rounded-lg shadow-lg">
            <h1 className="font-CormorantGaramond font-bold text-5xl selection:bg-none">todo</h1>
            <form onSubmit={submitHandler} className="my-2">
                <div className='mb-4'>
                    <label htmlFor='title' className='block text-4xl text-gray-700 font-semibold'>Title:</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
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
                        className='w-full h-10 px-3  rounded border focus:outline-none focus:ring focus:border-sky-500'
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='description' className='block text-gray-700 font-semibold'>Description:</label>
                    <textarea
                        id='description'
                        name='description'
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
