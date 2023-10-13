import React from 'react';
import { GrAdd } from 'react-icons/gr';

function Header(props) {

    const handleclick = () => {
        props.toggleTodos();
    }

    return (
        <div className='z-10 flex justify-between items-center w-[100%] fixed p-5 bg-sky-50'>
            <h1 className='font-CormorantGaramond font-bold text-5xl selection:bg-none'>todo</h1>
            <GrAdd onClick={handleclick} className='text-4xl rounded-full hover:scale-105 hover:cursor-pointer transition-all ease-linear'/>
        </div>
    );
}
export default Header;
