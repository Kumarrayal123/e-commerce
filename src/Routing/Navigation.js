import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationScreen from "./Pages/RegistrationScreen"
// import BlogScreen from "./Pages/BlogScreen"
// import AboutScreen from "./Pages/AboutScreen"
// import LoginScreen from "./Pages/Loginscreen"
// import HomeScreen from "./Pages/Homescreen"

const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<RegistrationScreen/>}/>
            
            </Routes></BrowserRouter>
        
    )
}
export default NavigationStack