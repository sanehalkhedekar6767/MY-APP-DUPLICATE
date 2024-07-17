import React, { Component } from 'react'
import "../App.css"


class AssignFormHandling extends Component {
    constructor(props){

        super(props)

        this.state = {
            userName: '',
            email: '',
            password : ''
        }
    }

    handleUserNameChange(e){
        console.log('inside handle user name change');
        this.setState(e.target.value)
    }

    handleEmailChange(e){
        console.log('inside handle email change');
        this.setState(e.target.value)
    }

    handlePasswordChange(e){
        console.log('inside handle password change');
        this.setState(e.target.value)
    }

   

    handleSubmit = (e)=>{
        console.log('inside submit button');
        //Save data to Database or send to some 3rd party API
        alert(`User  Name: ${this.state.userName} Email: ${this.state.email} Password: ${this.state.password}`);
        e.preventDefault();
      
    }


  render() {
    return (
      <>
      <div className="main">
    <h1>Form Handling</h1>

     <form onSubmit={this.handleSubmit}>
     <table className='tableContainer'>
        <tr>
            <td>UserName: </td>
            <td><input type="text" value={this.state.userName} onChange={this.handleUserNameChange} /></td>
        </tr>
        <tr>
            <td>Email: </td>
            <td><input type="email"  value={this.state.email} onChange={this.handleEmailChange} /></td>
        </tr>
        <tr>
            <td>Password: </td>
            <td><input type="password"  value={this.state.password} onChange={this.handlePasswordChange} /></td>
        </tr>
        <tr>
            <button type='submit' >SUBMIT</button>
        </tr>
      </table>
     </form>
     </div>
        
      </>
    )
  }
}
export default AssignFormHandling


