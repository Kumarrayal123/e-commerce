import { useEffect, useState, } from "react"




const UseTimer=()=>{
    const [timer,settimer]=useState(0)

useEffect(
    ()=>{
    const Interval= setInterval(()=>{
        settimer(timer+1)
    },1000)
    },[timer]
)

    
    return(
        <>
       <h1> UseTimer</h1>
       <h1>{timer}</h1>
        </>
    )
}
export default UseTimer 