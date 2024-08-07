import React, { Component } from 'react'
import axios from 'axios';

export default class APIIntUsingAxios extends Component {

  constructor(props){
      super(props)

      this.state={
          users :[]
      }

  }

  componentDidMount(){
      console.log('Inside component did mount using axio');
      this.fetchUserDetails();

  }

  fetchUserDetails = async() =>{
          const userData = await axios.get('https://fakestoreapi.com/users');
          console.log(userData);

          this.setState({users : userData.data})
  }

render() {
  return (
    <>
          <h2>API Integration Using Axios</h2>
          <ul>
              {this.state.users.map((user) =>(
                  <li> {user.username} - {user.password}</li>
              ))}
          </ul>
    </>
  )
}
}

