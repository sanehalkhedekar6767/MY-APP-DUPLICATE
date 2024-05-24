import React from 'react'



const ConditionalRendering = () => {

    const isLoggedIn = true;
    
    // 1) Conditional Rendering using if else
    // if(isLoggedIn){
    //     return <h1>Welcome to Conditional Rendering</h1>
    // }else{
    //     return<h1>Welcome as Guest</h1>
    // }


    // 2) Conditional Rendering using variable
    // if(isLoggedIn){
    //     result = <h1>Welcome to Conditional Rendering</h1> 
    // }else{
    //     result = <h1> Welcome as Guest</h1>
    // }


    // 3) Conditional Rendering using ternary operator
    // return isLoggedIn ? <h1>Welcome to Conditional Rendering</h1> : <h1>Welcome as Guest</h1>


    // 4) Conditional Rendering using short circuit
    return isLoggedIn && <h1>Welcome to Conditional Rendering</h1>;




}

export default ConditionalRendering
