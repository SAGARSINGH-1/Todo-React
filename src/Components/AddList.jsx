import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';

function AddList({ setData, toggleTodos }) {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [work, setWork] = React.useState(false);
    const [study, setStudy] = React.useState(false);
    const [entertainment, setEntertainment] = React.useState(false);
    const [family, setFamily] = React.useState(false);

    function submitHandler(e) {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const deadline = selectedDate;

        if (title && description ) {
            const newData = {
                id: Math.random(),
                title: title,
                description: description,
                deadline: deadline,
                checked: false,
                work: work,
                study: study,
                entertainment: entertainment,
                family: family
            };

            // Update the parent component's data
            setData((prevData) => [...prevData, newData]);
            toggleTodos()
        }else{
            toast.warn('Please fill in all fields.')
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
                <div className="flex gap-1">
                    <p onClick={() => Filter('work')} className={`cursor-pointer w-8 h-8 bg-purple-400 ${work ? 'border-[1px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('study')} className={`cursor-pointer w-8 h-8 bg-sky-300 ${study ? 'border-[1px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('entertainment')} className={`cursor-pointer w-8 h-8 bg-pink-300 ${entertainment ? 'border-[1px] border-black' : ''} rounded-full`}></p>
                    <p onClick={() => Filter('family')} className={`cursor-pointer w-8 h-8 bg-red-600 ${family ? 'border-[1px] border-black' : ''} rounded-full`}></p>
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
