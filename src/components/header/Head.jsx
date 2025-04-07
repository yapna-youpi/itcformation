import { Link, useNavigate } from "react-router-dom"

import logo from "/itclong.png"
import "./head.css"


const Head = () => {
  const navigate = useNavigate()
  return (
    <div>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo cursor-pointer">
              <span>
                <Link to="/"><img className="logo1" src={logo} alt="institut training formation" /></Link>
              </span>
                {/* <h1 className="text-3xl mb-0" onClick={()=> navigate("/")}><span className="text-firstColor">PAS</span><span className="text-secondColor">EIC</span></h1>
                <span className="-translate-y-1 inline-block"> Etude - Formation - Travail </span> */}
            </div>

            <div className="social">
                <a href="https://web.facebook.com/profile.php?id=61574677701693&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer"><div className="fab fa-facebook-f icon"></div></a>
                <a href="https://www.instagram.com/itc_formation_cameroun?igsh=MWMycGRlYjRoZ2ZmMg==" target="_blank" rel="noopener noreferrer"><div className="fab fa-instagram icon"></div></a>
                <a href="https://pin.it/20iA06n6w" target="_blank" rel="noopener noreferrer"><div className="fab fa-pinterest icon"></div></a>
                <a href="https://youtube.com/@itcformationcameroun?si=bL3u6HaJd1jxCCHJ" target="_blank" rel="noopener noreferrer"><div className="fab fa-youtube icon"></div></a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Head
