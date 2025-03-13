import { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

import "./header.css"

const Header = () => {

	const [click, setClick] = useState(false)

  const nav_links = [
		{
			path: "Formations",
			display: "formations",
		},
		{
			path: "Equipe",
			display: "team",
		},
		{
			path: "Pricing",
			display: "pricing",
		},
		{
			path: "Journal",
			display: "journal",
		},
		{
			path: "About",
			display: "about",
		},
	];

  return (
    <>
      <Head/>
    <header>
      <nav className="flexSB">
        <ul className={click ? "mobile_nav" : "flexSB"} onClick={()=> setClick(false)}>
          <li className="ms-xl-8 ms-lg-0"> <Link to="/">Acceuil</Link></li>
          {
            nav_links.map((route,index)=>(
              <li  key={index}><Link to={route.display}>{route.path}{route.display == "courses" ? <div className="ms-1 fa fa-caret-down"></div> : "" }</Link></li>
            ))
          }
        </ul>
        <div className="start font-bold">
          <button>Nous Contacter</button>
        </div>
		<button className="toggle" onClick={()=> setClick(!click)}>
			{ click ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> }
		</button>
      </nav>
    </header>
    </>
  )
}

export default Header

