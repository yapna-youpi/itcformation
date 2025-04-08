import React from 'react'
import {UilTelegramAlt} from '@iconscout/react-unicons'

import "./newsletters.css"

function Newsletter() {
  return (
    <div className='newsletter  sm:h-20 md:h-96 flex justify-center items-center relative'>
        <div className="newsletter-content text-maron ">
            <div className="newsletter-ico text-white my-5">
                <i className='testicon mx-auto h-9 w-9 rounded-full bg-darkorange flex justify-center items-center pr-1 text-2xl '><UilTelegramAlt/></i>
            </div>
            <div className="newsletter-text">
                <h2 className='text-xl md:text-3xl font-bold my-5 py-3 text-left md:text-center'>
                    Inscrivez-vous à la Newsletter. itcformation <br/>
                    la newsletter qui vous inspire !
                </h2>
            </div>
            <div className="form mb-5 md:mb-0">
                <form >
                    <div className="form-group bg-white flex items-center py-3 pl-1 md:pl-4   shadow-dark-400/40">
                        <input className='border-r w-8/12 outline-0' type="text" placeholder='Entrez votre adresse e-mail' />
                        <button  className='button-newsletter text-xs w-2/12 xs-text-xs md:w-4/12 ml-0 flex items-center font-semibold hover:text-limer hover:duration-500 '><i className='mx-2'><UilTelegramAlt/> </i> S'INSCRIRE</button>
                    </div>
                </form>
                <div className="newsletter-policy">
                    <input type="checkbox"  />
                    <label className='font-sans text-sm  '> J'accepte <span className='underline cursor-pointer'>la politique de confidentialité</span></label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter