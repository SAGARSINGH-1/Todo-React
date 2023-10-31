import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

function AddList({ setData, toggleTodos }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [work, setWork] = useState(false);
    const [study, setStudy] = useState(false);
    const [entertainment, setEntertainment] = useState(false);
    const [family, setFamily] = useState(false);
    const [title, setTitle] = useState(''); // Initialize title state with an empty string
    const [description, setDescription] = useState(''); // Initialize description state with an empty string

    function submitHandler(e) {
        e.preventDefault();
        const newTitle = title; // Get title from the state
        const newDescription = description; // Get description from the state
        const deadline = selectedDate;

        if (newTitle && newDescription ) {
            const newData = {
                id: Math.random(),
                title: newTitle, // Use the newTitle from the state
                description: newDescription, // Use the newDescription from the state
                deadline: deadline,
                checked: false,
                work: work,
                study: study,
                entertainment: entertainment,
                family: family,
            };

            // Update the parent component's data
            setData((prevData) => [...prevData, newData]);
            toggleTodos();

            // Clear input fields after submitting
            setTitle('');
            setDescription('');
            setSelectedDate(null);
        } else {
            toast.warn('Please fill in all fields.');
        }
    }

    function Filter(value) {
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
        <div className="bg-sky-100 p-6 w-max box-border">
            <h1 className="font-CormorantGaramond border-b-4 border-white font-bold text-5xl selection:bg-none">todo</h1>
            <form onSubmit={submitHandler} className="mt-2 p-2">
                <div className='flex gap-1 justify-between items-center'>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        placeholder='Enter the Title'
                        className='text-3xl p-1 rounded-lg'
                        value={title} // Bind the input value to the title state
                        onChange={(e) => setTitle(e.target.value)} // Update the title state
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
                        className='text-xl w-full h-[150px] px-2 rounded-lg'
                        value={description} // Bind the input value to the description state
                        onChange={(e) => setDescription(e.target.value)} // Update the description state
                    />
                </div>
                <div className="flex gap-4 justify-center mb-4">
                    <p onClick={() => Filter('work')} className={`cursor-pointer w-8 h-8 bg-purple-400 ${work ? 'border-[2px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('study')} className={`cursor-pointer w-8 h-8 bg-sky-300 ${study ? 'border-[2px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('entertainment')} className={`cursor-pointer w-8 h-8 bg-pink-300 ${entertainment ? 'border-[2px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('family')} className={`cursor-pointer w-8 h-8 bg-red-600 ${family ? 'border-[2px] border-black' : ''} rounded-full`}></p>
                </div>
                <div className='flex justify-center'>
                    <button
                        type='submit'
                        className='w-[30%] text-center text-xl h-10 text-white bg-sky-500 rounded hover:bg-sky-600 focus:outline-none focus:ring'
                    >
                        Add Todo
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddList;
