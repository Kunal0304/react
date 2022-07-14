import React, { useState } from 'react'

export const Todo_01 = () => {
    const[item,setItem]=useState(" ")
    const [count,setcount]=useState([])
    function handel(e) {
            setItem(e.target.value);
            console.log(item)
    }
    function Save() {
        console.log(count)
        {count.map(()=>item,...count)}
    }
  return (
    <div>
        <input type='text'
        onKeyUp={handel}        
         ></input>
        <button onClick={Save}>Save</button>
    </div>
  )
}
