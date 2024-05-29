import React, {useState} from 'react'

const StateInFuncComp = () => {
//syntax to useState hook in Function Component
//const[stateName, func name to change state] = userState(Initial value)

const[UserName, setUserName] = useState("Guest")

//Number state
const [count, setCount] = useState(0)

//Object state
const [person, changePerson] = useState({Name:"Sanehal", Age:21})

//Boolean State
const [value, changeValue] = useState(true)

//Array State
const[array, changeArray] = useState([2,3,4,5])

const changeUser = () => {
    setUserName('Admin');

}
//Number state
const changeCount = ()=>{
    setCount(count+1);
}
//Object state
const updatePerson = ()=>{
    changePerson(prePerson=>(
        {...prePerson, Name:"Sukh"}
    ))
}
//Boolean State
const updateValue = ()=>{
    changeValue(false)
}
//Array State
const updateArray = ()=>{
  changeArray(array.push)
  console.log(array);
}
     
  return (
    <>
      <h1>State in Functional Component</h1>
      <h2>Current user: {UserName}</h2>
      <button onClick={changeUser}>Login as ADMIN</button>

      <h2>count : {count}</h2>
      <button onClick={changeCount}>+</button>

      <h2>Person : {JSON.stringify(person)}</h2>
      <button onClick={updatePerson}>Update</button>

      <h2>Boolean Value : {value}</h2>
      <button onClick={updateValue}>Update Value</button>

      <h2>Array : {array.join(',')}</h2>
      <button onClick={updateArray}>Update Value</button>
    </>
  )
}

export default StateInFuncComp
