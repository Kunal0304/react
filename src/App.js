import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import './App.css';

function App() {
  const [mode, setmode] = useState('light');

  const toggleMode=()=>{
    if (mode ==='light') {
      setmode('dark')
      document.body.style.backgroundColor ='#0d2d4c'
    } else {
      setmode('light')
      document.body.style.backgroundColor ='white'

    }
  }

  return (
    <>
      <Navbar Navbar="Cool" Find="Searching" mode={mode} toggleMode={toggleMode} />
      <div className='container my-5' >
        <Textarea heading="Enter text something" mode={mode}/>

      </div>
    </>
  );
}

export default App;
