import { useState } from "react"





function Arrayofobject(){
    const array=[
    {Id:1,Name:"kumar",Age:22,role:"React developer" },
    {Id:2,Name:"pavan",Age:31,role:"front-end developer"},
    {Id:3,Name:"nani",Age:24,role:"full-stack developer"},
    {Id:4,Name:"uday",Age:22,role:"data-analyst"},]
    const[Array,setArray]=useState(array)


      return(
        <>
        <h1>Array of object example</h1>
<table style={{border:"2px solid black"}}>
    <tr>
        <th style={{border:"2px solid black",color:"red",textAlign:"center"}}>ID</th>
        <th style={{border:"2px solid black",color:"red",textAlign:"center"}}>NAME</th>
        <th style={{border:"2px solid black",color:"red",textAlign:"center"}}>AGE</th>
        <th style={{border:"2px solid black",color:"red",textAlign:"center"}}>Role</th>
    </tr>
        {Array.map((array1)=>{
            return(
              <tr style={{border:"2px solid black"}}>
              <td style={{border:"2px solid black"}}>{array1.Id}</td>
              <td style={{border:"2px solid black"}}>{array1.Name}</td>
              <td style={{border:"2px solid black"}}>{array1.Age}</td>
              <td style={{border:"2px solid black"}}>{array1.role}</td>
               
               
               </tr>


            )
        })}
        </table>
        </>
      )
}
export default Arrayofobject
    
    