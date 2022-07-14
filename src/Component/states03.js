import Func11 from "./Func11";
import React,{useState,useEffect} from 'react'

function Func10() {

    const [first, setfirst] = useState(0)
    const [firs, setfirs] = useState(100)

    useEffect(() => {
      console.log("use effect is running")

    },[first])
    

    return(
        <>
        <Func11 num={first}/>
        <Func11 num={firs}/>
        <button onClick={()=>{setfirst(first+1)}}>click kro bhiya</button>
        <button onClick={()=>{setfirs(firs+1)}}>click kro bhiya</button>

        {/* <h1>hello world</h1> */}
        </>
    )
}
export default Func10;