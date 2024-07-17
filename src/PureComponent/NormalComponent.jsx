import React, { Component } from 'react'

 class NormalComponent extends Component {

    constructor(){
        super();

        this.state = {
            count: 0
        }
        
    }

        incrementCount = ()=>{
            console.log('Inside increment count method');
            this.setState({count:this.state.count})
            //here we are placing the same value in set state but still render method is executing so to solve this problem 
            //pure component is used.....executes only when there is actual change in the mehtod...component
        }

  render() {
    console.log('Inside render method....');
    return (
      <>
        <h1>Normal Component</h1>

        <p>Count: {this.state.count}</p>
        <button variant="info" onClick={this.incrementCount}>Increment Count</button>

      </>
    )
  }
}

export default NormalComponent

