import { useState } from "react"

function Numberexample(){
    const [Count,setCount]=useState(0)
    return(
        <>
        <h1 style={{color:"red"}}>Numberexample</h1>
        <h2>{Count}</h2>
        <button style={{color:"green"}} onClick={()=>{setCount(Count+1)}}>increment</button>
        <button style={{color:"red"}} onClick={()=>{setCount(Count-1)}}>decrement</button>
        <button style={{color:"blue"}} onClick={()=>{setCount(0)}}>reset</button>
        </>
    )
}
export default Numberexample