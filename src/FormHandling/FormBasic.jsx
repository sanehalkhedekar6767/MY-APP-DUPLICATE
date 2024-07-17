// // How to bind value of form with state

// import React from 'react'
// import { useState } from 'react'

// const FormBasic = () => {

//     const[firstName, setFirstName] = useState('')
//     const[lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')

//     const handleFirstNameChange = (e)=>{
//         console.log(e.target.value);
//         setFirstName(e.target.value); //to set value to firstName
//     }

//     const handleLastNameChange = (e)=>{
//         console.log(e.target.value);
//         setLastName(e.target.value);
//     }

//     const handleEmailChange = (e)=>{
//         setEmail(e.target.value);
//     }

//     const handleSubmit = (e)=>{
//         console.log('inside submit button');
//         //Save data to Database or send to some 3rd party API
//         alert(`First Name: ${firstName} Last Name: ${lastName} Email: ${email}`);
//         e.preventDefault();
      
//     }

//   return (
//     <>
//     <h1>Form Handling</h1>

//     <form onSubmit={handleSubmit}>
//         <div>
//             First Name: <input type="text" name="" id="" value={firstName} onChange={handleFirstNameChange}/>
//         </div>
//         <br />
//         <div>
//             {/* value used to create controlled forms otherwise control wil go to DOM */}
//             Last Name: <input type="text" name="" id="" value={lastName} onChange={handleLastNameChange}/>
//         </div>
//         <br />
//         <div>
//             Email: <input type="email" name="" id="" value={email} onChange={handleEmailChange}/>
//         </div>
//         <br />
//         <button type='submit'>SUBMIT</button>
//     </form>
      
//     </>
//   )
// }

// export default FormBasic

import React, { useState } from 'react'

const FormBasic = () => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[email, setEmail] = useState('')
    
    const handleFirstNameChange = (e)=>{
        console.log(e.target.value);  //it will display on console in how many times we type letter but not displayed on text box
        setFirstName(e.target.value); //display value typed on textbox
    }

    const handleLastNameChange= (e)=>{
        console.log(e.target.value);
        setLastName(e.target.value);
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }

    const handleSubmit=(e)=>{
//Save data to Database or send to some 3rd party API
        console.log('Inside Submit Button');
        alert(`First Name: ${firstName} Last Name: ${lastName} Email: ${email}`)
        e.preventDefault();
    }
  return (
    <>
    <h1>Form Handling</h1>
    <form onSubmit={handleSubmit}>
        <div>
            First Name: <input type="text" name="" id="" value={firstName} onChange={handleFirstNameChange}/>
        </div>
        <br />
        <div>
        {/* value used to create controlled forms otherwise control wil go to DOM called as uncontrolled form*/}
            Last Name: <input type="text" name="" id="" onChange={handleLastNameChange}/>
        </div>
        <br />

        <div>
            Email : <input type="email" name="" id="" value={email} onChange={handleEmailChange} />
        </div>

        <br />
        <button type='submit'>SUBMIT</button>

    </form>
      
    </>
  )
}

export default FormBasic

