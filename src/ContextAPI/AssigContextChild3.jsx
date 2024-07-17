import React, { Component, useContext } from 'react'
import AssignContext from './AssignContext'

export default class AssigContextChild3 extends Component {
    static contextType = AssigContextChild3;
   
  render() {
    const {message} = this.context;
    return (
        <>
        <h3>Child 3 context</h3>
        <p>{message}</p>
          
        </>
    )
  }
}
