import React, { Component } from 'react';

import Button from 'react-bootstrap/Button';



class YoutubeButton extends Component{

state={
    textMessage:"please subscribe",
    count:0,

    studentData:[

    {
        name:"kumar",
        age:"21",
        skills:"html,css,js"
    },
    {
        name:"pavan",
        age:"24",
        skills:"java ,sql"
    },

    {
        name:"uday",
        age:"23",
        skills:"js,react"
    },
    {
        name:"aravind",
        age:"23",
        skills:"java"
    },
    




    ]
}

handleclick=()=>{
   // alert("clicked")
   this.setState(
{

   textMessage:"Thanks for subscribing",
   count:0
   
}


   )
}
incrementHandler=()=>{
    this.setState(
       {
        count:this.state.count+1
       } 
    )

}

decrementHandler=()=>{

    this.setState(
        {
         count:this.state.count-1
        } 
     )

}
resetHandler=()=>{
    this.setState(
        {
         count:this.state.count=0
        } 
     )

}
render(){

return(
    <div>
     <button style={{backgroundColor:"red",color:"white"}}onClick={this.handleclick}>{this.state.textMessage}</button> 
     <h1>{this.state.count}</h1> 
     <button onClick={this.incrementHandler}>Increment</button> 
     <button onClick={this.decrementHandler}>Decrement</button>
     <button onClick={this.resetHandler}>Reset</button>
     <Button as="a" variant="success">
    Button as link
  </Button>
  



{
  this.state.studentData.map((student)=>{
return(
<card>
    <h1>{student.name}</h1>
    <h2>{student.age}</h2>
    <h3>{student.skills}</h3>

</card>
)
  })
}


    </div>
)

}

}
export default YoutubeButton