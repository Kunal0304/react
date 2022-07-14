import { useState } from "react";

function Func06() {
    const [data,setData]=useState("hell")
    const [print,setPrint]=useState(false)
    function getData(val) {
        // console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <>
        <div>
            {print?<h2>{data}</h2>:null}
        </div>
        <h1>{data}</h1>
        <input type="text" onChange={getData}/>
        <button onClick={()=>setPrint(true)}>click kro</button>
        </>
    )
}
export default Func06;