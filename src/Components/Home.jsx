// Home.js
import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import EditItem from './EditItem';
import { toast } from 'react-toastify';

function Home({ data, setData }) {
  const [editState, setEditState] = useState({});
  const [editingItem, setEditingItem] = useState(null);
  const [work, setWork] = useState(true); // Set to true by default
  const [study, setStudy] = useState(true); // Set to true by default
  const [entertainment, setEntertainment] = useState(true); // Set to true by default
  const [family, setFamily] = useState(true);
  const [done, setDone] = useState(true);

  const toggleCheck = (id) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return item;
      })
    );
  };

  const toggleEdit = (id) => {
    setEditState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const startEditing = (item) => {
    setEditingItem(item);
  };

  const saveEdit = (updatedItem) => {
    const updatedData = data.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });

    setData(updatedData);
  };

  const deleteTodo = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
    toast.info('🦄 Deleted todo', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  };

  function filterApply(value) {
    // Determine which filter to toggle based on the provided value
    switch (value) {
        case 'work':
            setWork(true);
            setStudy(false);
            setEntertainment(false); // Corrected value to 'entertainment'
            setFamily(false);
            setDone(false)
            break;
        case 'study':
            setStudy(true);
            setWork(false);
            setEntertainment(false);
            setFamily(false);
            setDone(false)

            break;
        case 'entertainment': // Corrected value to 'entertainment'
        setEntertainment(true);
            setWork(false);
            setStudy(false);
            setFamily(false);
            setDone(false)
            break;
        case 'family':
            setFamily(true);
            setWork(false);
            setStudy(false);
            setEntertainment(false);
            setDone(false)
            break;
        case 'all':
            setFamily(true);
            setWork(true);
            setStudy(true);
            setEntertainment(true);
            setDone(true)
            break;
        case 'done':
            setDone(true)
            setFamily(false);
            setWork(false);
            setStudy(false);
            setEntertainment(false);
            break;
        default:
            break;
    }
}


const filteredData = data.filter((item) => {
    return (
      (work && item.work && !item.checked) ||
      (study && item.study && !item.checked) ||
      (entertainment && item.entertainment && !item.checked) ||
      (family && item.family && !item.checked) ||
      (done && item.checked)
    );
  });
  



  return (
    <div className="flex gap-3">
      {/* ... Your other components ... */}
      <div id='active' className='flex flex-col w-[388px] p-5 max-h-max border justify-between'>
                <div className='p-2 flex flex-col justify-center h-[68vh] text-3xl gap-12 fixed'>
                    <div onClick={() => filterApply('work')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-purple-400 rounded-full'> </p> Work</div>
                    <div onClick={() => filterApply('study')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-sky-300 rounded-full'> </p>study</div>
                    <div onClick={() => filterApply('entertainment')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-pink-300 rounded-full'> </p>entertainment</div>
                    <div onClick={() => filterApply('family')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-red-600 rounded-full'> </p>family</div>
                    <div onClick={() => filterApply('all')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-gray-600 rounded-full'> </p>All</div>
                    <div onClick={() => filterApply('done')} className='cursor-pointer flex items-center gap-6'><p className='inline-block w-8 h-8 bg-green-500 rounded-full'> </p>Done</div>
                </div>
                <div className='cursor-pointer flex justify-center items-center bottom-8 left-10 fixed'>
                    <img className='text-center w-28' src="./public/man_4140048.png" alt="Profile" />
                </div>
            </div>
      <div className="flex flex-wrap w-[100%] mt-[60px] gap-4 pl-4 overflow-y-auto flex-grow">
        {filteredData.map((item) => (
          <div key={item.id} className="w-[47%] bg-yellow-200 h-min p-4 rounded-xl">
            <div className="flex justify-between mt-3 relative overflow-visible">
              <h1 className={`text-2xl font-semibold ${item.checked ? 'line-through' : ''}`}>
                {item.title}
              </h1>
              <BsThreeDots onClick={() => toggleEdit(item.id)} className={`text-2xl cursor-pointer`} />
              {editState[item.id] && (
                <div className="bg-white absolute right-3 top-5 w-[100px] rounded-sm">
                  <p onClick={() => startEditing(item)} className='cursor-pointer hover:bg-gray-300 px-[10px] py-1 selection:bg-none'>Edit</p>
                  <p onClick={() => deleteTodo(item.id)} className='cursor-pointer hover:bg-gray-300 px-[10px] py-1 selection:bg-none'>Delete</p>
                </div>
              )}
            </div>
            <div className={`py-4 ${item.checked ? 'line-through' : ''}`}>{item.description}</div>
            <div className="flex justify-between mt-3">
              <div className="flex gap-1">
                <p className={`cursor-pointer w-8 h-8 bg-purple-400 rounded-full ${item.work?"":"hidden"}`}></p>
                <p className={`cursor-pointer w-8 h-8 bg-sky-300 rounded-full ${item.study?"":"hidden"}`}></p>
                <p className={`cursor-pointer w-8 h-8 bg-pink-300 rounded-full ${item.entertainment?"":"hidden"}`}></p>
                <p className={`cursor-pointer w-8 h-8 bg-red-600 rounded-full ${item.family?"":"hidden"}`}></p>
              </div>
              <div onClick={() => toggleCheck(item.id)} className="flex items-center">
                <span className="cursor-pointer text-xl mb-1 selection:bg-none">Done</span>
                <input className="ml-2 w-5 h-5" type="checkbox" name="Done" checked={item.checked} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Display the EditItem component if an item is being edited */}
      {editingItem && (
        <EditItem
          item={editingItem}
          onSave={(updatedItem) => {
            saveEdit(updatedItem);
            setEditingItem(null);
          }}
          onCancel={() => setEditingItem(null)}
        />
      )}
    </div>
  );
}

export default Home;
