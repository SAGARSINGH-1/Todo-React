import { IoAddCircleOutline } from 'react-icons/io5';

export default function None() {
    return(
        <div className="w-[98%] h-[79vh] gap-4 text-gray-500 p-4 flex justify-center items-center">
            <IoAddCircleOutline className='text-7xl'/>
            <h1 className="text-3xl font-bold">Add Todo's Here...</h1>
        </div>
    )
}