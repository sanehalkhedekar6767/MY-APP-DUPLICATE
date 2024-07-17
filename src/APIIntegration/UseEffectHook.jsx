import React,{useEffect, useState} from 'react'

const UseEffectHook = () => {

 //After React version 16.8 introduced hooks in functional replicate class component life cycle
 
 //class component initialization (constructor and state )=> useState hook in functional component

 //class component(componentDidMount, componentDidUpdate, componentWillUnmount)=> useEffect hook in functional component

// Syntax===>>>
    // useEffect(
    //     ()=>{
    //         //callback function
    //     }, [dependency Array]
    // )
const[count, setCount] = useState(0)
const[name, setName] = useState("Sneh")



//1. Use effect hook with no dependency array - call on every render
// useEffect(
//     ()=>{
//         console.log("Inside useEffect and no dependency array");
//     }
// )

//2. Use Effect hook with empty dependency array
// useEffect(
//     ()=>{
//         console.log('Inside useEffect with empty dependency array');
//     }, []
// )

//3. Use Effect hook with dependency array
useEffect(
        ()=>{
            console.log('Inside useEffect with dependency array');
        }, [count]   //name is not in dependency so on changing name it not be called
    )

const incrementCount = ()=>{
    console.log('Inside increment count');
    setCount(count+1)
}
const changeName=()=>{
    console.log('Inside change name');
    setName("Sanehal")
}
  return (

    <>
    {console.log('inside return')}
    <h3>Functional component useEffect Hook</h3>
      <h4>Count: {count}</h4>
      <button onClick={incrementCount}>Increment Count</button>

      <h4>Name: {name}</h4>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default UseEffectHook
