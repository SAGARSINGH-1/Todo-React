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
