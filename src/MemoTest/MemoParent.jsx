import React, { useState } from 'react'
import MemoComp from './MemoComp'

const MemoParent = () => {

    const[count, setCount] = useState(0)

    const incrementCount=()=>{
        setCount(count+1);
        console.log('Inside increment count');
    }

  return (

    <>
      
      <h2>Memo Parent</h2>
      <p>Count : {count}</p>
      <button onClick={incrementCount}>Count++</button>

      <MemoComp name={'Sanehal'} count={count}/>

     
    </>
  )
}

export default MemoParent
