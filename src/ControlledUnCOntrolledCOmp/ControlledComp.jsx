import React, { useState } from 'react'

const ControlledComp = () => {

    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert( `Username: ${userName} Password: ${password}`)
    }


  return (
    <>
    <h4>Login Form</h4>
    <form onSubmit={handleSubmit}>
        
        <div>

            <div className='five Columns' style={{marginTop:'20px'}}>
                <label >User Name</label>
                <input type="text" placeholder='Enter User Name' value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
         </div>

        <div >
           <div className='five Columns'>
                <label >Password</label>
                <input type="password" placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
        </div>

        <button type='submit'>LogIn</button>
       

    </form>
    
      
    </>
  )
}

export default ControlledComp
