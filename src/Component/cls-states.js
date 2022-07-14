import React,{Component} from 'react';

export default class Func05 extends Component{
    constructor(){
        super()
        this.state={
            data:"anil bhai"
        }
    }
    apple(){
       this.setState({

        data:"yadav ji"
       })
        // console.log(this.state.data)
    }
    render(){
        return(
            <>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple()}>click kro edhar</button>
            </>
        )
    }
}