import axios from "axios";
import { Component } from "react";
import {Button, Card, CardBody, CardText ,CardTitle} from "react-bootstrap";





class Products extends Component{
constructor(){
    console.log("constructor")
    super()
    this.state={
    
        products:[]
    }
}



componentDidMount(){
console.log("ComponentDidmount")
axios.get("https://fakestoreapi.com/products")
.then(response=>this.setState({products:response.data}))
}




render (){
    console.log("render")
    console.log(this.state.products)

    return(
    <>
        <h1></h1>

    {
        this.state.products.map((product)=>{
        return (
        
        
    <Card style={{width:"350px",height:"550px",display:"inline-flex",margin:"20px"}} >
        <CardBody>
            <CardTitle>Product</CardTitle>
            <Card.Img src={product.image} alt={product.image} width={100} height={250}/>
            <CardText>
         <h1>id:{product.id}</h1>
             <p>title:{product.title}</p>
             <p>category:{product.category}</p>
             <p>price:{product.price}</p>
           
           <Button style={{color:"black",margin:"5px"}}>Addcart</Button>
           <Button  style={{color:"red",margin:"5px"}}>Shop</Button>
           <Button style={{color:"yellow",margin:"5px"}}>click</Button>
           </CardText>
           </CardBody>
           
        </Card>
        
        )
    }
        
        
    
    
    )
}
</>
    )
}
}

export default Products