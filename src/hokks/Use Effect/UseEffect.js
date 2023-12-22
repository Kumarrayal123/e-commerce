

import { useEffect, useState } from "react"

const UseEffect=()=>{
    const[count,setcount]=useState(0)
    const[count1,setcount1]=useState(0)
    useEffect(
        ()=>{
            document.title=`count${count +count1}`
            console.log("useeffect") 
        },[count,count1]
    
    )
    return(
        <>
        <h1>useeffect</h1>
        <h2>{count}</h2>
        <h2>{count1}</h2>
        <button onClick={()=>setcount(count+1)}>click to increase the count</button>
        <button onClick={()=>setcount1(count1+1)}>clicl to increase the count</button>
        </>
    )
}
export default UseEffect