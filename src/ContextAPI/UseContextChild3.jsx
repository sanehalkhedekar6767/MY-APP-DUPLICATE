import React, { useContext } from 'react'
import myContext from './MyContext'

const UseContextChild3 = () => {
   const message = useContext(myContext)
  return (
    <>
        <h4>In UseCOntext Child 3</h4>
        <p>{message}</p>
    </>
  )
}

export default UseContextChild3
  