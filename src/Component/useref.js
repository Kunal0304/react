import React,{useRef} from "react";


function Func16() {

    const reff=useRef(null);
    function newFunc(){
        reff.current.value="2000"
        reff.current.style.color="red"
    }

    return(
        <>
        <h1 >Hello world function 16</h1>
        <input ref={reff}></input>
        <button onClick={newFunc}>click kro</button>
        </>
    )
}
export default Func16;