import React, {useState} from 'react'

const ArrayState = () => {
    const[array, modifyArray] = useState([1,2,1,3])

    const updateArray = ()=>{
       
            modifyArray(preArray=>(
               [ ...preArray, array.push()]
            ))
            console.log(array);
       
       
    }
  return (
    <>
     <h1>State in Functional Component</h1>
      <h2>Array : {array.join(',')}</h2>
      <button onClick={updateArray}>Update Value</button> 
    </>
  )

}
export default ArrayState
