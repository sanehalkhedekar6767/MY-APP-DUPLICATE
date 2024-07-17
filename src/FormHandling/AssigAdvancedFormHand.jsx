import React, { useState } from 'react'

import "../App.css"

// form handling using functional component

const AssigAdvancedFormHand = () => {

    const[form, setForm] = useState({
        userName:'',
        password: '',
        email: '',
        color: '',
        file: '',
        luckyNum: '',
        birthDate: '',
        gender: '',
        hobbies: ''
    })

    const handleChange=(e)=>{
        const{name, value} = e.target;
        console.log(`Name: ${name}  Value: ${value}`);

        setForm((preState)=>({
            ...preState, [name]:value
        }))
    }

    const handleSubmit=(e)=>{
        console.log('On Clicking on Submit');
        e.preventDefault();
    }

  return (
    <>
    <div className='container'>
        <h1>
            Advanced Form Handling
        </h1>
        <form onSubmit={handleSubmit} >
           <table className='formElements'>
            <tr>
                <td>User Name</td>
                <td><input type="text" name='userName' value={form.userName} onChange={handleChange}/></td>
            </tr>
            <br />
            <tr>
                <td>Password</td>
                <td><input type="password"  name='password' value={form.password} onChange={handleChange}/></td>
            </tr>
            <br />

            <tr>
                <td>Email</td>
                <td><input type="email"  name='email' value={form.email} onChange={handleChange}/></td>
            </tr>
            <br />

            <tr>
                <td>Color</td>
                <input type="color" name='color' value={form.color} onChange={handleChange}/>
            </tr>
            <br />

            <tr>
                <td>Choose File</td>
                <td><input type="file" name='file' value={form.file} onChange={handleChange}/></td>
            </tr>
            <br />

            <tr>
                <td>Lucky Number</td>
                <td><input type="number" name='luckyNum' value={form.luckyNum} onChange={handleChange} /></td>
            </tr>
            <br />

            <tr>
                <td>Date of Birth</td>
                <td><input type="date" name='birthDate' value={form.birthDate} onChange={handleChange}/></td>
            </tr>
            <br />

            <tr>
                <td>Gender:</td>
                <tr><input type="radio" name='gender' value={form.gender} onChange={handleChange}/>Female</tr>
                <tr><input type="radio" name='gender' value={form.gender} onChange={handleChange}/>Male</tr>
            </tr>
            <br />

            <tr>
                <td>Hobbies:</td>
                <tr>
                    <td><input type="checkbox" name='hobbies' value={form.hobbies}  onChange={handleChange}/>Play</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name='hobbies' value={form.hobbies} onChange={handleChange}/>Sing</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name='hobbies' value={form.hobbies} onChange={handleChange}/>Dance</td>
                </tr>
                <tr>
                    <td><input type="checkbox" name='hobbies' value={form.hobbies} onChange={handleChange}/>Draw</td>
                </tr>
            </tr>
            <br />

            <tr>
                <button type='submit'> SUBMIT </button>
            </tr>
           </table>
        </form>
    </div>
      
    </>
  )
}

export default AssigAdvancedFormHand
