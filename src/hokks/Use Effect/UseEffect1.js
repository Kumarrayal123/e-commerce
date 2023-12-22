import axios from "axios"
import { useEffect, useState } from "react"
import './External.css'




const UseEffect1=()=>{
    const[data,setData]=useState([])
useEffect(
    ()=>{
        axios.get ("https://jsonplaceholder.typicode.com/photos")
        .then(res=>setData(res.data))
    },[]
)

    return(
        <>
        <h1>UseEffect1</h1>
        <table> 
            <tr>
            
                <th style={{border:"2px solid black"}}>Id</th>  
                <th style={{border:"2px solid black"}}> Title</th>
                <th style={{border:"2px solid black"}}>Image</th>
            </tr>
            
       
                        
                        
                    {
                    data.length>0 && data.map((eachItem)=>{
                        return(
                            
                            
                        <tr> 
                                <td style={{border:"1px solid black"}}>{eachItem.id}</td>
                                
                            
                            <td style={{border:"1px solid black"}}> {eachItem.title}</td>
                            
                            
                            <td> <img style={{border:"1px solid black" }} src={eachItem.url}  alt={"item"}/></td>
                            </tr>
                            
                            
                            

                        )
                        
                    })
                    }
      </table>

        </>
    )
}
export default UseEffect1