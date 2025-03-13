import {Routes, Route} from "react-router-dom"
import Home from '../pages/home/Home'
import About from "../components/about/About"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/about" exact element={<About/>} />
        
    </Routes>
  )
}

export default Routers
