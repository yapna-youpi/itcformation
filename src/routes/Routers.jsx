import {Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import About from "../components/about/About"
import Login from "../pages/inscription/login/Login"
import Contact from "../components/help/Help"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/about" exact element={<About/>} />
      <Route path="/Login" exact element={<Login/>} />
      <Route path="/contact" exact element={<Contact/>} />
        
    </Routes>
  )
}

export default Routers
