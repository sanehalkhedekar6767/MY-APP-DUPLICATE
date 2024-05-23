import React from "react";

function JSXTest(){
    const num = 20;

    return(
        <div>
            {/* Javascript inside HTML */}
            <h1>Welcome to {num==10 ? 'number is 10' : 'number is not 10'}</h1>
        </div>
    )
}
export default JSXTest