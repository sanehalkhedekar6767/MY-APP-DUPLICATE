import React from 'react'
import UseContextChild2 from './UseContextChild2'

const useContextChild1 = () => {
  return (
    <>
    <h2>In UseContext Child 1</h2>
      
      <UseContextChild2/>
    </>
  )
}

export default useContextChild1
