
import React from "react";

class Func17 extends React.Component{

    constructor(props){
        super(props);
        this.reff=React.createRef();
    }

    hell() 
    {
        this.reff.current.style.color="red"  
        this.reff.current.style.background="black"
    }
    render(){
        return(
            <>
            <h1 ref={this.reff}>class component Func 17</h1>
            <button onClick={()=>this.hell()}>click krna h edhar</button>
            </>
        )
    }
}
export default Func17;