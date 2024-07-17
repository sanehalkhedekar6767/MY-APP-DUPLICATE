import React, { useState } from 'react'
import Child1 from './Child1'

const Parent = () => {

    const[welcomeMsg, setWelcomeMsg] = useState('Welcome to CodeMind Technology')


  return (
    <>
    <h1>Parent Component Prop Drilling</h1>
    {/* <p>{welcomeMsg} </p> */}
    <Child1 message={welcomeMsg}/>
    </>
  )
}

export default Parent
