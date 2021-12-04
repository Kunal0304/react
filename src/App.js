import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }

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
      <Alert/>
      <div className='container my-5' >
        <Textarea heading="Enter text something" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
