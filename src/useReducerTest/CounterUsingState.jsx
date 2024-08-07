//useState, useEffect, useRef, useContext, , useReducer
import React, { useState } from 'react'

const CounterUsingState = () => {

        const[count, setCount] = useState(0)

        // syntax of useReducer hook: 
        // const[count, dispatch] = useReducer(reducer, 0)  
        const increment = ()=>setCount(count+1)
        const decrement = ()=>setCount(count-1)
        const reset = ()=>setCount(0)  

  return (
    <>
      <h3>Counter example with state</h3>
      <p>Count: {count}</p>
       <div>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={reset}>Reset</button>
       </div>
    </>
  )
}

export default CounterUsingState
