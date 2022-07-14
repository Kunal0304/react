import React, { useState } from 'react';

var a="anil bhai"

// function Func04() {
//     function Chang() {
//         alert("hello kunal")
//         a="kunal bhai"
//     }
//     return(
//         <>
//         <h1>{a}</h1>
//         <button onClick={Chang}>click here</button>
//         </>

//     )
// }


function Func04() {
    const [count, setCount] = useState("kunal");
    function Chang() {
        setCount("pawan")
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Chang}>click here</button>
        </>
    )
}
export default Func04;