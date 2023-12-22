import { useState } from "react"


const Arrayexample=()=>{
    
    const fruitArray=["mango","apple","banana"]
    const [fruits,setFruits]=useState(fruitArray)
    const fruithandler=()=>{
        setFruits([...fruits,"pine apple"])
    }
   return (
    <>
    <h1>Arrayexample</h1>
    
    <h1>Length of basket fruits.length</h1>
    <button onClick={fruithandler}>click to add pine apple to basket</button>
    <ul>
    {fruits.map((fruits=>{
        return(
            <>
            <li>{fruits}</li></>
        )
    }))}
       </ul>
    </>
   )
}
export default Arrayexample