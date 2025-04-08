import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

import "./header.css"
import toUp from "./toup.png"

const Header = () => {

	const [click, setClick] = useState(false)

	//function to control scrool
    const stickyHeaderFunc =()=>{
		let rootElement = document.querySelector("#header");
		let toUp = document.querySelector(".to-up");
  
		window.addEventListener("scroll", () => {
		  if (
			document.body.scrollTop > 600 ||
			document.documentElement.scrollTop > 600
		  ) {
			toUp.classList.add("appear");
		  } else {
			toUp.classList.remove("appear");
		  }
		});
	  }

	  
  
	  
	useEffect(() => {
	  stickyHeaderFunc()
  
	  return () => {};
	}, []);
	 

  const nav_links = [
		{
			path: "Formations",
			display: "formations",
		},
		{
			path: "A propos",
			display: "about",
		},
		{
			path: "pedagogies",
			display: "pedagogies",
		},
		{
			path: "Actualités",
			display: "actualités",
		},
		{
			path: "S'inscrire",
			display: "login",
		},
		{
			path: "Contact",
			display: "contact",
		},
	];

  return (
    <>
      <Head/>
    <header id="header" >
      <nav className="flexSB" id="nav">
        <ul className={click ? "mobile_nav" : "flexSB"} onClick={()=> setClick(false)}>
          <li > <Link to="/">Acceuil</Link></li>
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
	  <div className="to-up" onClick={()=>window.scrollTo(0, 0)}> <a ><i><img src={toUp} alt="to up" /></i></a> </div>
    </header>
    </>
  )
}

export default Header

