import React from "react";
import ChildCompB from './ChildCompB';


class ChildCompA extends React.Component{

    render(){
        console.log(this.props);
        
        const {myName, personObj} = this.props; //es6 feature of Destructuring
        console.log(personObj);

        return(
            <>
                <h3>This is our Child Component A</h3>
                
                <p> Personal Details :  { JSON.stringify(personObj) }</p>
                <ChildCompB myName = {myName} personalDetails = {personObj} />
            </>
        )

    }
}

export default ChildCompA;