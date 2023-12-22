import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardBody, CardText ,CardTitle} from "react-bootstrap";



const UseEffect2=()=>{
    const[data,setData]=useState([])
    useEffect(
        ()=>{
            axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res=>setData(res.data))
        },[]
    )
    return(
        <>
        <h1>Using card</h1>

        {
        data.length>0 && data.map((eachItem)=>{

          return(
            <>
             

             
             <Card style={{width:"400px",height:"500px",display:"inline-flex",margin:"70px"}} >
        <CardBody>
            <CardTitle></CardTitle>
            
            <CardText>
         <h1>id:{eachItem.id}</h1>
             <h1>title:{eachItem.title}</h1>
           <h1>image:</h1><img style={{width:"100px", heigh:"100px"}} src={eachItem.url}></img>

          
           </CardText>
           </CardBody>
           
        </Card>
              





            </>
          )







        })

        }
        </>
    )
}
export default UseEffect2