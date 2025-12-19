import React,{useState} from "react";
function Counter(){

    const[number,display]=useState(0)
    const increment=()=>{
        display(number+1)
    }
    return(
        <div>
            <h3>{number}</h3>
            <button onClick={increment}>Increment</button>
        </div>
    )

}

export default Counter;