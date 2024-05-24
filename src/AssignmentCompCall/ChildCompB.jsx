import React from "react";


class ChildCompB extends React.Component{

    render(){
        console.log(this.props);
        
        const {myName, personalDetails} = this.props; //es6 feature of Destructuring
        console.log(personalDetails);

        return(
            <>
                <h3>This is our Child Component B</h3>
               
                <p>Personal Details :  { JSON.stringify(personalDetails) }</p>
            </>
        )

    }
}

export default ChildCompB;