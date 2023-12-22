import { Component } from "react";
import {Button,Card} from "react-bootstrap";



class Employee extends Component{

  state={
    employee:[

        {
            Name:"Kumar",
            Age:"21",
            Company:"Apteen",
            Role:"React developer",
            Cts:"6.5 Lpa",
            Location:"Hyderbad",
            Imageurl:"https://media.glassdoor.com/companyupdate/w900/589359/aptean-companyupdate-1644027823463.png?signature=6dc09f210ed9fe1117006a43083069cb9fea4afabe8a215618f1dc6894f8dc7f"
        },
        {
            Name:"Pavan",
            Age:"24",
            Company:"Deolite",
            Role:"Data Analyst",
            Cts:"6.5 Lpa",
            Location:"Pune",
            Imageurl:"https://content.jdmagicbox.com/comp/hyderabad/e8/040pxx40.xx40.140628185731.q8e8/catalogue/deloitte-tax-services-india-pvt-ltd-gachibowli-hyderabad-tax-consultants-nb8i3h8ugh.jpg?clr"
        },
    
        {
            Name:"Uday",
            Age:"23",
            Company:"Tcs",
            Role:"Full stack developer",
            Cts:"6.5 Lpa",
            Location:"Hyderbad",
            Imageurl:"https://cdn.telanganatoday.com/wp-content/uploads/2021/09/TCS-2.jpg"
            
        },
        {
            Name:"Aravind",
            Age:"23",
            Company:"Intouch",
            Role:"Non-voice",
            Cts:"4.5 Lpa",
            Location:"Hyderbad",
            Imageurl:"https://frontlinesmedia.in/wp-content/uploads/2023/05/2023-24-7-intouch-new-logo-name-change-to-intouchcx.jpg"
        },
        {
            Name:"Sai",
            Age:"27",
            Company:"Amazon",
            Role:"React developer",
            Cts:"4.5 Lpa",
            Location:"Hyderbad",
            Imageurl:"https://images.moneycontrol.com/static-mcnews/2023/03/amazon-shut-down-featured--580x435.png?impolicy=website&width=1600&height=900"
        },
        {
            Name:"Prasad",
            Age:"25",
            Company:"Wipro",
            Role:"Java developer",
            Cts:"9.25 Lpa",
            Location:"Hyderbad",
            Imageurl:"https://media.glassdoor.com/lst2x/10/59/b7/83/wipro.jpg"
        }
    ]
  }




    render(){
        return(
            <div>
                <h1></h1>
                
                {
                    this.state.employee.map((employee)=>{
                        return(
                        <Card style={{width:"450px",height:"770px",color:"green",display:"inline-flex",margin:"60px"}}>
                            <h1 style={{color:"red"}}>EMPLOYEE DETAILS</h1><hr></hr>
                            <Card.Img src={employee.Imageurl}width={220} height={270}/><hr></hr>
                            {/* <h1 style={{color:"red"}}>EMPLOYEE DETAILS</h1><hr></hr> */}
                           <h1>{`Name:${employee["Name"]}`}</h1>
                            <h1>{`Age:${employee["Age"]}`}</h1>
                            <h1>{`Company:${employee["Company"]}`}</h1>
                            <h1>{`Role:${employee["Role"]}`}</h1>
                            <h1>{`Cts:${employee["Cts"]}`}</h1>
                            <h1>{`Location:${employee["Location"]}`}</h1>
                            <Button>More</Button>
                        </Card>
                        )
                    })
                }







            </div>

        )
    }
}
export default Employee