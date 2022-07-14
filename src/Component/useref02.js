import React,{useState,useRef} from "react";
import Func19 from "./Func19";

function Func18() {
    const aa=useRef(null)
    const [add,setAdd]=useState(0)

    function updateInput(){
        aa.current.value="1000"
        aa.current.style.color="yellow"
        aa.current.style.background="black"
    }
    return(
        <>
        <h1>function 18 child forwardref</h1>
        <Func19 name={add} ref={aa}/>

        <button onClick={()=>setAdd(add +1)}>button to dba kr dekho</button>
        <button onClick={updateInput}>button to dba</button>


        </>
    )
}
export default Func18;