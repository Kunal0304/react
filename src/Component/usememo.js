import { useState,useMemo } from "react"

function Func15() {

    const [chang,setchang]=useState(0)
    const [chang02,setchang02]=useState(100)

// function changUpdate(){
//     console.log("hello world")
//    return chang*5
// }
    const qq=useMemo(function changUpdate(){
        console.log("hello world")
       return chang*5
    }, [chang])
    return(
        <>
        <h1>func15 is run</h1>
        <h1>{chang}</h1>
        <h1>{chang02}</h1>
        {/* <h1>{changUpdate()}</h1> */}
        <h1>{qq}</h1>
        <button onClick={()=>setchang(chang+1)}>increment</button>
        <button onClick={()=>setchang02(chang02-1)}>dicrement</button>

        </>
    )
}
export default Func15