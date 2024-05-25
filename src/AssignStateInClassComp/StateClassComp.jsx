import React, {Component} from 'react'

class StateClassComp extends Component{

    constructor(props){
        super(props)

        this.num = 1

        this.state = {
            number: 1
        }
    }
        increment(){
            console.log("Inside increment function")
            this.setState({number: this.state.number + 1 })
            console.log(this.state.number);
        }
   
    render(){
        return(
            <>
            <h1>State In Class Component</h1>
            <h3>Count : {this.state.number}</h3>
            <button onClick={this.increment.bind(this)}> + </button>
            
            </>

        )
    }
}


export default StateClassComp
