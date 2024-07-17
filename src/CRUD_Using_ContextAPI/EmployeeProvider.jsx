import {    createContext, useState } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = ({children})=>{

    const [employee, setEmployee] = useState([]);

    const addEmployee = (emp)=>{
        setEmployee([...employee, emp])
        console.log('Add employee called');
    }


    return(

        <EmployeeContext.Provider value={{employee, addEmployee}}>
            {children}
        </EmployeeContext.Provider>

    )
}