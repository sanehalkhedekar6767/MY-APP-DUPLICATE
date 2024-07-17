import React, { useState } from 'react'
import ChildPTC from './ChildPTC';

const ParentPTC = () => {

  const[message, setMessageFromChild] = useState("I am from Parent component")

  const updateMessage = (newMessage)=>{
    console.log('Inside update message function of parent');
  }
   
  return (
    <>
    <h2>Parent Component</h2>
    <ChildPTC setMessage= {this.updateMessage}/>
      
    </>
  )
}

export default ParentPTC
