// App.jsx
import React, { useCallback, useEffect, useState } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import AddList from './Components/AddList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [todos, setTodos] = useState(false);
  const [leng,setleng]=useState('')
  const toggleTodos = () => {
    setTodos(!todos);
  };

  const [data, setData] = useState([]); // Add a state to store the data

  useEffect(() => {
    setTodos(true)
    if (data.length > leng) {
      toast.success('Added Todo Successfully')
      setleng(data.length)
    }
  }, [data.length])

  return (
    <div className="relative h-[100vh] overflow-y-scroll">
      <ToastContainer position="bottom-right" autoClose={2000}/>
      <Header todos={todos} toggleTodos={toggleTodos} />
      <div className="mt-[70px]">
        <Home data={data} setData={setData} /> {/* Pass data and setData as props */}
      </div>
      <div className={`text-5xl absolute top-[20%] left-[32%] ${todos ? 'hidden' : ''}`}>
        <AddList setData={setData} toggleTodos={toggleTodos}/> {/* Pass setData as a prop to AddList */}
      </div>
    </div>
  );
}

export default App;
