import React, {Component } from 'react';


class StateInClassComp extends Component{

    constructor(props){
        super(props)

        this.user = "Guest";

        this.state = {
            userName: "Guest"
        }

        this.state = {
            flag:true,
            arrayValue:[1,2,,5,9,10,15,20,25],
            person:{
                name:"Sanehu",
                age: 25
            }
        }
    }
    changeUser(){
        console.log("Inside change user function")
        this.user = "Admin";
        console.log(this.user) 

    }

    changeUserName(){
        console.log("Inside change userName function")
        this.setState({userName : "Admin"})
        console.log(this.state.userName);

    }
    
    render(){
        return(<>
            <h1>State In Class Component</h1>

            {/* <h3>Current User : {this.user}  </h3> */}
            <h3>Current User : {this.state.userName}</h3>

            {/* <button onClick={this.changeUser.bind(this)}> Login as Admin </button> */}
            <button onClick={this.changeUserName.bind(this)}> Login as Admin </button>

            <p>Boolean is : {this.state.flag?"True":"False"}</p>
            <p>Array values: {this.state.arrayValue.join(',')}</p>
            <p>Person Object : {JSON.stringify(this.state.person)}</p>
            </>

        )
    }
}
export default StateInClassComp;