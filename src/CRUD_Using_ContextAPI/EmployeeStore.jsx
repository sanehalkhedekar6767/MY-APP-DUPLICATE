import { createContext, useState } from "react";

 export const EmployeeContext = createContext()

 export const EmployeeProvider = ({children})=>{

    const[employee, setEmployee] = useState([]);

    const addEmployee = (emp)=>{
        setEmployee([...employee, emp])
        console.log('add employee called')
    }

    const editEmployee=(id, updatedEmployee)=>{
        console.log('Isnide edit function')
                setEmployee(
                    employee.map((emp)=>emp.id===id ? updatedEmployee : emp)
                )
    }
    return(

        <EmployeeContext.Provider value={{employee, addEmployee, editEmployee}}>
            {children}
        </EmployeeContext.Provider>

    )
 }