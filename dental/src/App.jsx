import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

 const routes = (
  <Router>
  <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/login" element={<Login/>} />
   <Route path="/signup" element={<Register/>} />
   

  </Routes>
</Router>

 ); 



function App() {
 
  
  return (
    
       <div>{routes}</div>
   
  )
}

export default App
