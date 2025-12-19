import React,{useState,useEffect} from 'react'

const Counter = () => {
    
    const[count,setCount] = useState(0)

    useEffect(()=>{
      if(count !== 0 && count%3 === 0){
      alert(`The current number ${count} is divisible by 3`)
    }
    },[count])
    
    
  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Counter
