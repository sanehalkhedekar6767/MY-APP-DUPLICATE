import React, { useCallback, useState } from 'react'

const UseCallbackChild = ({number1, number2, count})=> {

    const[sum1, setSum] = useState (0)

    const test =()=>{
        let sum = 0;
        sum = number1 + number2;
        console.log('BUTTON clicked');
        console.log(sum);

        setSum(sum1+1); // this is called in normal ie sum1+1 is  executing at every click
        console.log(sum1);
    }

    const handleClick = useCallback(()=>{
        let sum = 0;
        sum = number1 + number2;
        console.log('Button click');
        console.log(sum);

        setSum(sum1+1); // this is not called in use callback ie sum1+1 is not executing at every click(code not executing at every click)
        console.log(sum1);

    }, [number1, number2])

  return (
    <>
    <h3>Use Callback Child</h3>
    <p>Count: {count}</p>
    <button onClick={handleClick }>Click</button>
      
    </>
  )
}

export default UseCallbackChild
