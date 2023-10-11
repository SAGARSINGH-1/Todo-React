import React from 'react';
import { BsThreeDots } from 'react-icons/bs'

function Home() {
    return (
        <div className='flex gap-3'>
            <div className='flex flex-col w-[388px] p-5 max-h-max border justify-between'>
                <div className='p-2 flex flex-col justify-center h-[50vh] text-3xl gap-12 fixed'>
                    <div className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-purple-400 rounded-full'> </p> Work</div>
                    <div className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-sky-300 rounded-full'> </p>study</div>
                    <div className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-pink-300 rounded-full'> </p>entertairement</div>
                    <div className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-green-300 rounded-full'> </p>family</div>
                </div>
                <div className='cursor-pointer flex justify-center items-center bottom-8 left-10 fixed'>
                    <img className='text-center w-28' src="./public/man_4140048.png" alt="Profile" />
                </div>
            </div>

            {/* Right Box */}

            <div className='flex flex-wrap w-[100%] mt-[60px] gap-4 pl-4 overflow-y-auto flex-grow'>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='cursor-pointer text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done'/>
                        </div>
                    </div>
                </div>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                        </div>
                    </div>
                </div>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                        </div>
                    </div>
                </div>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                        </div>
                    </div>
                </div>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                        </div>
                    </div>
                </div>
                <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                    <div className='flex justify-between mt-3'>
                        <h1 className='text-2xl font-semibold'>This is tittle</h1>
                        <BsThreeDots className='text-2xl cursor-pointer'/>
                    </div>
                    <div className='py-4'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                    </div>
                    <div className='flex justify-between mt-3'>
                        <div className='flex gap-1'>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                            <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                            <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-xl mb-1'>Done</span>
                            <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                        </div>
                    </div>
                </div>
                    <div className='w-[47%] bg-yellow-200 h-min p-4 rounded-xl'>
                        <div className='flex justify-between mt-3'>
                            <h1 className='text-2xl font-semibold'>This is tittle</h1>
                            <BsThreeDots className='text-2xl cursor-pointer'/>
                        </div>
                        <div className='py-4'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quo eligendi quam placeat quisquam delectus nisi voluptatum doloremque porro error.</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <div className='flex gap-1'>
                                <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-purple-400 rounded-full'></p>
                                <p className='cursor-pointer hover:border-[1px] border-black w-8 h-8 bg-sky-300 rounded-full'></p>
                                <p className='cursor-pointer border-[1px] border-black  w-8 h-8 bg-pink-300 rounded-full'></p>
                                <p className='cursor-pointer hover:border-[1px] border-black  w-8 h-8 bg-green-300 rounded-full'></p>
                            </div>
                            <div className='flex items-center'>
                                <span className='text-xl mb-1'>Done</span>
                                <input className='ml-2 w-5 h-5' type="checkbox" name='Done' />
                            </div>
                        </div>
                    </div>
                


            </div>
        </div>
    );
}

export default Home;
