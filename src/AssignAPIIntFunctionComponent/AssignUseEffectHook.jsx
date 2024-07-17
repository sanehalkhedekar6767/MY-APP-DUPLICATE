import React, { useEffect, useState } from 'react'
import axios from 'axios';


const AssignUseEffectHook = () => {
    const[user, fetchUserDetails] = useState("data")

    useEffect(
        ()=>{
            console.log('Inside useEffect with dependency array');
        }, [user]   //name is not in dependency so on changing name it not be called
    )


  return (

    <>
    <h2>Fetch data from API using axios and useEffect hook</h2>
    <p></p>
    {/* <div class="table-responsive container-fluid" id="tableContainer">
            <table class="table  table-striped  table-sm table-bordered " >
                <thead>
                <tr class="table-warning">
                    <th>ID</th>
                    <th>EMAIL ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                </tr>
                
                </thead>

                <tbody>
                {this.state.users.map((userData)=>(
                    <tr>
                        <td>{ userData.id }</td>
                        <td>{ userData.email }</td>
                         <td>{ userData.username }</td>
                        <td> {userData.password} </td>
                     </tr>
                       
                ))}

                </tbody>
            </table>
            </div> */}
      
    </>
  )
}

export default AssignUseEffectHook
