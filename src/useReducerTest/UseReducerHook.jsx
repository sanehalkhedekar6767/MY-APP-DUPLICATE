//useState, useEffect, useRef, useContext, , useReducer
import React, { useReducer } from 'react'

const UseReducerHook = () => {

// Using arrow function
    //   const reducer = ( count, action )=>{

    //     switch(action){

    //         case 'add':
    //             return count+1;
    //             break;

    //         case 'sub':
    //             return count-1;
    //             break;

    //         case 'res':
    //             return 0;
    //             break;

    //         default:
    //             break;

    //     }
        
    //   }

      const[count, dispatch] = useReducer(reducer, 0)

    //   Using normal function
       function reducer(count, action){
        switch(action){

            case 'add':
                return count+1;
                break;

            case 'sub':
                return count-1;
                break;

            case 'res':
                return 0;
                break;

            default:
                break;

        }

       }


  return (
    <>
        <h3>Counter Using UseReducer</h3>
        <p>Count: {count}</p>
        <div>
            <button onClick={()=>{dispatch('add')}}>Increment</button>
            <button onClick={()=>{dispatch('sub')}}>Decrement</button>
            <button onClick={()=>{dispatch('res')}}>Reset</button>
        </div>
   
    </>
  )
}

export default UseReducerHook
