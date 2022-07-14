import React from 'react';

export default class Func07 extends React.Component{
    
    constructor(){
        super();
        console.log("constructor calling")
        this.state={
            name:"kunal"
        }
    }
    
    render(){
        // function obj() {
        //     this.setState({
        //         name:"dipesh"
        //     })
        // }
        console.log("render calling")
        return(
            <>
            <h1>Rendering data</h1><br/>
            <h1>{this.props.name}</h1><br/>
            <h1>{this.state.name}</h1><br/>
            <button onClick={()=>this.setState({name:"pawan ji"})}>click here</button>
            {/* <button onClick={aa}>click here</button> */}

            </>
        )
    }
    
    componentDidMount(){
        console.log("componentDidMount calling")
    }
}