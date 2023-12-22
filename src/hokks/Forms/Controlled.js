import {useState} from "react"


const Controlled=()=>{
    const [username,setUserName]=useState("")
    const [age,setAge]=useState("")
    const [mobilenumber,setmobileNumber]=useState("")
    const [designation,setDesignation]=useState("")

    const [tableData,setTableData]=useState([

    ])
    const handleSubmit=(event)=>{
        event.preventDefault()
        const item={
            username:username,
            age:age,
            mobilenumber:mobilenumber,
            designation:designation
        }
        setTableData([...tableData,item])
        console.log(tableData)
        setUserName("")
        setDesignation("")
        setAge("")
        setmobileNumber("")
    }

    const usernameValidation=(event)=>{
        setUserName(event.target.value)

        if(username.length>10){
            alert("Username must be less than 10 characters")
        }
    }
    const ageValidation=(event)=>{
        setAge(event.target.value)
        if(age.length>100){
            alert("Age must be less than 100")
        }
    }
    const mobilenumberValidation=(event)=>{
        setmobileNumber(event.target.value)
        if(mobilenumber.length>11){
            alert("mobilenumber must be less than 11 number")
        }
    }
    return(
        <>
        <h1 style={{textAlign:"center"}}>Employee details</h1>
        
        <form onSubmit={handleSubmit}>
            
            <div style={{textAlign:"center"}}>
            
               <label>Username:</label>
                < input type={"text"} value={username} onChange={(event)=>usernameValidation(event)}/>
            
            </div>
            <div style={{textAlign:"center"}}>
                <label>Age:</label>
               <input type={"age"} value={age} onChange={(event)=>ageValidation(event)}/>
               
            </div>
            <div style={{textAlign:"center"}}>
                <label>mobile Number:</label>
                <input type={"mobilenumber"} value={mobilenumber} onChange={(event)=>mobilenumberValidation(event)}/>
               </div>
               <div style={{textAlign:"center"}}>
                <label>Designation:</label>
                <select value={designation} onChange={(event) => setDesignation(event.target.value)}>
                <option value=" React Developer">React Developer</option>
                <option value="React Native Developer">React Native Developer</option>
                <option value="Angular Developer">Angular Developer</option>
                </select>
        </div>
         <div style={{textAlign:"center"}}>
        <input type={"submit"}/>
          </div>
        </form>

        <div>
            <h1>Employee details</h1>    
            {tableData.length>0 && (
                <table>
                    <thead>
                        <tr style={{border:"2px"}}>
                            <th>Username</th>
                            <th>Age</th>
                            <th>mobile Number</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((table,index)=>(
                            <tr key={index}>
                                <td style={{border:"2px"}}>{table.username}</td>
                                <td>{table.age}</td>
                                <td>{table.mobilenumber}</td>
                                <td>{table.designation}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </>
    )
}    
export default Controlled  