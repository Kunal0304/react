import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      {/* <Login/> */}
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
