import React, { useState } from 'react'
import UseCallbackChild from './UseCallbackChild'

const UseCallbackParent = () => {

    const[count, setCount] = useState(0)

    const incrementCount = ()=>{
        setCount(count+1)
    }

  return (
    <>
    <h1>Use Callback Parent</h1>
    <p>Count: {count}</p>
    <button onClick={incrementCount}>Increment</button>

    <UseCallbackChild number1={10} number2={count} count={count}/>
      
    </>
  )
}

export default UseCallbackParent
