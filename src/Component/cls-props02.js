// import { Func08 } from "./Func08"

import React from "react";

// export function Func09(props) {
//     return(
//         <>
//         <h1>Func 09 run</h1>
//         <h1>{props.name}</h1><br/>
//         </>
//     )
// }

export default class Func09 extends React.Component{
    render(){
        console.log("rander is runnnnnn")
        return(
            <>
            <h1>hello i am func 9 {this.props.name}</h1>
            </>
        )
    }
}