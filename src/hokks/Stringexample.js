import { useState } from "react"


const Stringexample=()=>{
 const[login,setLogin]=useState(false)
 const loginhandler=()=>{
        setLogin(!login)
    }
    return(
        <>
        <h1>Stringexample</h1>
      {
        login
        ?
        <h1>please log in and fill the application</h1>
        :
         <h1>welcome user</h1>

      }

        
        
        <button onClick={loginhandler}>Log in</button>
        </>
    )
}
export default Stringexample