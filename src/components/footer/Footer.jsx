import React from 'react'

import "./footer.css"
import logo from "./assets/itclong.png"
import { Link } from 'react-router-dom'

import right from "./assets/right.png"

const Footer = () => {
  return (
    <div className='footer relative'>
      <div className="footer-content absolute"></div>
      <div className="footer-section text-white justify-around">
        <div className="fot1">
          <div className="fot-logo">
            <Link to="/"><img src={logo} alt="logo de itc formation" /></Link>
          </div>
          <div className="text-logo">
            <p className='px-5'>L'ecole des metiers à otre service. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, eum? Expedita alias dolorum, ex vitae est animi, modi eos quasi ratione dicta sint. Deserunt impedit commodi odio numquam, deleniti iusto.</p>
            <div className="social mt-6 ms-8">
                <a href="https://web.facebook.com/profile.php?id=61574677701693&_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer"><div className="fab ms-2 fa-facebook-f icon bg-limer text-white hover:bg-firstColor"></div></a>
                <a href="https://www.instagram.com/itc_formation_cameroun?igsh=MWMycGRlYjRoZ2ZmMg==" target="_blank" rel="noopener noreferrer"><div className="fab ms-2 fa-instagram icon bg-limer text-white hover:bg-firstColor"></div></a>
                <a href="https://pin.it/20iA06n6w" target="_blank" rel="noopener noreferrer"><div className="fab ms-2 fa-pinterest icon bg-limer text-white hover:bg-firstColor"></div></a>
                <a href="https://youtube.com/@itcformationcameroun?si=bL3u6HaJd1jxCCHJ" target="_blank" rel="noopener noreferrer"><div className="fab ms-2 fa-youtube icon bg-limer text-white hover:bg-firstColor"></div></a>
            </div>
          </div>
        </div>   
        <div className="fot1">
          <div className="text-fot1">Patenaires</div>
          <ul className='footer-listy'>
            <li className=''><img src={right} alt="toff" /> MINEFOP</li>
            <li className=''><img src={right} alt="toff" /> MINPMEESA</li>
            <li className=''><img src={right} alt="toff" /> CRTV</li>
            <li className=''><img src={right} alt="toff" /> Iusty</li>
            <li className=''><img src={right} alt="toff" /> Polytechnique</li>
          </ul>
        </div>
        <div className="fot3">
          <div className="text-fot1">Explore</div>
          <ul className='footer-listy'>
            <li className=''><img src={right} alt="toff" /> Acceuil</li>
            <li className=''><img src={right} alt="toff" /> Formation</li>
            <li className=''><img src={right} alt="toff" /> propos</li>
            <li className=''><img src={right} alt="toff" /> Actualites</li>
            <li className=''><img src={right} alt="toff" /> s'inscrire</li>
          </ul>
        </div>
        <div className="fot2">
          <div className="text-fot1">Contact</div>
          <ul className='footer-list'>
            <li className=''>Yaoundé - cradat descente ecole des postes.</li>
            <li className=''>(+237) 655 840 109 / (+237) 653 692 328</li>
            <li className=''>itctrainingformation@itctrainingformation.fr</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom  flex justify-between pl-4 pr-0 md:px-8 py-4 text-slate-500 ">
            <p>
              © {new Date().getFullYear()} international training formation. Tous droits
              réservés.
            </p>
            <p>
              Designer par{" "}
              <a
                className="text-white"
                href="https://api.whatsapp.com/send?phone=678719650"
                target="_blank"
              >
                Will-turner
              </a>
            </p>
          </div>
    </div>
  )
}

export default Footer
