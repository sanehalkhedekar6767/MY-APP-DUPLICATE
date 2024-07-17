import React, { useEffect, useRef, useState } from 'react'

const AdvancedFormHand = () => {
     
    //creating advanced form handling by declaring all input boxes in only one state
    const[form, setForm] = useState({
        userName : '',
        password : '',
        email: ''
    })

   const nameRef = useRef()
//    in case of class component use
//    const ref = React.createRef()
//    and  ref.current.focus in componentDidMount function


    //only one function is used for all the input boxes
    const handleChange = (e)=>{
        //destructuring is performed   
        const{name, value} = e.target;
        console.log(`Name: ${name} Value: ${value}`);

        //retains the previous state and update the new changes
        setForm((preState)=>({
            ...preState, [name] : value 
        }))
    }

    const handleSubmit=(e)=>{
        //Save data to Database or send to some 3rd party API
                console.log('Inside Submit Button');
                alert('Form Submitted')
               e.preventDefault();
            }

     useEffect(()=>{
        nameRef.current.focus(); 
     },[])
     

  return (


    <>
   
    <form onSubmit={handleSubmit}>
        <div>
            User Name: <input type="text" name="userName"  value={form.userName} onChange={handleChange} required ref={nameRef}/>
        </div>
        <br />
        <div>
            Password: <input type="password" name="password"  value={form.password} onChange={handleChange}  required/>
        </div>
        <br />
        <div>
            Email: <input type="email" name="email"  value={form.email} onChange={handleChange}  required/>
        </div>
        <br />

        <button type='submit'>SUBMIT</button>
    
    </form>
      
    </>
  )
}

export default AdvancedFormHand
