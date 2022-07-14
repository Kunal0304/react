import React from 'react'

function Demo1(props) {
    console.log("render demo 1 Home")
  return (
    <div>
        <p>{props.n}</p>
    </div>
  )
}

export default Demo1