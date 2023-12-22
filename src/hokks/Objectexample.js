import { useState } from "react"

const Objectexample=()=>{
    
    const intialvalue={
        id:1,
        name:"sai",
        designation:"React developer"
    }

const[employee,setemployee]=useState(intialvalue)
const employeehandler=()=>{
    setemployee({...employee,name:"ram"})

}
return(
    <>
    <h1>Object example</h1>
    <h2>{employee.name}</h2>
    <h2>{employee.nation}</h2>
    <h2></h2>
    <button onClick={employeehandler}>click me to update the name</button>
    </>
)

}
export default  Objectexample