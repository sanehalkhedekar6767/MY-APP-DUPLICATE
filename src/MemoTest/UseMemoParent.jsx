import React, { useState } from 'react'
import UseMemoComp from './UseMemoComp'

const UseMemoParent = () => {

    const[count, setCount] = useState(0)

    const incrementCount=()=>{
        setCount(count+1);
        console.log('Inside increment count');
    }

  return (
    <>
      <h3>Use Memo Parent</h3>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>Count++</button>

      <UseMemoComp number1={10} number2={20}/>
    </>
  )
}

export default UseMemoParent
