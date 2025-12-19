import {useState} from "react";
function Calculator(){
    const[num1,setNum1] = useState(0)
    const[num2,setNum2] = useState(0)
    const[operation,setOperation] =useState("add")
    const[res,setResults] = useState([])
    let value;
    const perform=()=>{
        if(operation === "add"){
            value = num1+num2
        }
        if(operation === "sub"){
            value = num1-num2
        }
        if(operation === "mul"){
            value = num1*num2
        }
        setResults([...res, value]);
    };

    return(
        <div>
            <input type = "number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
            <input type = "number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />

            
            <select 
            value = {operation}
            onChange={(e) => setOperation(e.target.value)}
            >
            <option value = "add">Add</option>
            <option value = "sub">Subtract</option>
            <option value = "mul">Multiply</option>
            </select>
            <button onClick={perform}>Perform Action</button>
            <p>Result:</p>
            <ul>
            {res.map((r, index) => (
                <li key={index}>{r}</li>
            ))}
            </ul>

            
        </div>
    
    )
    

}
export default Calculator;