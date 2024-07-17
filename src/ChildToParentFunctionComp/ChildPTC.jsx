import React, {useState} from 'react'

const ChildPTC = () => {

  const[newMessage, setMessage]  = useState("I am from child component")

  const changeMessage = ()=>{
    console.log('Inside Change message function of child');
    setMessage(newMessage);
  }


  return (
    <>
    <h2>Child component</h2>
      
      <button onClick={changeMessage}>Update</button>
    </>
  )
}

export default ChildPTC
