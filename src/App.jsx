import { useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import AddList from './AddList';
function App() {

  const [todos, setTodos] = useState(true)
  const toggleTodos = () => {
    setTodos(!todos);
  };

  return (
    <div className='relative h-[100vh] overflow-y-scroll'>
      <Header todos={todos} toggleTodos={toggleTodos} />
      <div className='mt-[70px]'>
        <Home />
      </div>
      <div className={`text-5xl absolute top-[50%] left-[50%] ${todos?"hidden" :""} `}>
        <AddList/>
      </div>
    </div>
  )
}

export default App
