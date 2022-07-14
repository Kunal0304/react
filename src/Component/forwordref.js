import React,{forwardRef} from "react";
function Func19(props,ref) {
    return(
        <>
        <h1>function 19 parent forwardref</h1> 
        <h1>{props.name}</h1>    
        <input ref={ref}></input>   

        </>
    )
}
export default forwardRef(Func19);