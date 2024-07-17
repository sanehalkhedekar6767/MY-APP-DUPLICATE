import React from 'react'

const MemoComp = (props) => {


  return (

    <>
          {console.log('Inside memo comp')}
        <h3>Memo Comp</h3> 
        <h5>{props.name}</h5>
        <h6>{props.count}</h6>
    </>
  )
}

// export default MemoComp

export default React.memo(MemoComp)