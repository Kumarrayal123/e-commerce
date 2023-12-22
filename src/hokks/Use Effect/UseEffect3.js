import axios from "axios"
import { useEffect } from "react"





const UseEffect3=()=>{
    useEffect(
        ()=>{
          axios.get('https://jsonplaceholder.typicode.com/photos/${}') 
          .then(res=>setData(res.data))
        },[]
         
    )


    return(
        <>
        <h1>using botton</h1>
        <input> enter a number</input>
        </>

    )
} 
export default UseEffect3