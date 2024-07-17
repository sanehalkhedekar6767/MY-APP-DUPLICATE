import React, { useState } from 'react'

const UnControlledForm = () => {

    const userNameRef = React.createRef();
    const passwordRef = React.createRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert( `Username: ${userNameRef.current.value} Password: ${passwordRef.current.value}`)
    }


  return (
    <>
    <h4>Login Form</h4>
    <form onSubmit={handleSubmit}>
        
        <div>

            <div className='five Columns' style={{marginTop:'20px'}}>
                <label >User Name</label>
                <input type="text" placeholder='Enter User Name'  ref={userNameRef}/>
            </div>
         </div>

        <div >
           <div className='five Columns'>
                <label >Password</label>
                <input type="password" placeholder='Enter Password'  ref={passwordRef}/>
            </div>
        </div>

        <button type='submit'>LogIn</button>
       

    </form>
    
      
    </>
  )
}

export default  UnControlledForm
