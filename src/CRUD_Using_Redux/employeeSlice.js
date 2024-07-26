import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    employees:[ ]

}


const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{

        addEmployee: (state, action)=>{
            console.log('add employee');
        },
        editEmployee: ()=>{

        },
        deleteEmployee: ()=>{

        }
    }
})

export const {assEmployee, editEmployee, deleteEmployee} = employeeSlice.actions
export default employeeSlice.reducer