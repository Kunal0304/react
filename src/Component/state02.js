import React,{useState} from "react";
// import {Func09} from "./Func09";
import Func09 from "./Func09";




// export default class Func08 extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             name:"rahul ji"
//         }
//     }
//     render(){
//         console.log("render is run")
//         return(
//             <>
//             <h1>Func08 run</h1>
//             <Func09 name={this.state.name}/>
//             <button onClick={()=>this.setState({name:"aalok ji"})}>Func08 button </button>
//             </>
//         )
//     }
// }






export function Func08() {
    const [add,setadd]=useState("prince")
    return(
        <>
        <h1>Func08 run</h1>
        <Func09 name={add}/>
        <button onClick={()=>setadd("aalok ji")}>Func08 button </button>
        </>
    )
}