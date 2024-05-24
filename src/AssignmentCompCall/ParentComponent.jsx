import React from "react";
import ChildCompA from './ChildCompA';



const ParentComp = () =>{
        const name = "Sanehal";

        let person = {
            name:"Sanehal Khedekar",
            course: "B Tech",
            address : 'Sangola'
        };

    return(

        <>
            <h1> Welcome to Parent Component {name}</h1>
            <ChildCompA myName = {name} personObj = {person} />
            
            


        </>
    )
}

export default ParentComp;