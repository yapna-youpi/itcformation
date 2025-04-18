import React from 'react'

import "./formations.css"
import whatsapp from "./whatsapp.png"

const Formations = () => {
  return (
    <div className='formation'>
        <h2 className='text-5xl font-bold text-center sm:py-10'>Nos Filiaires de Formations</h2>
      <div className="format px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10" >
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">


            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3 lo">Departement gestion et Management</p>
                <p className="mt-2 text-sm text-slate-500">Le departement comprend plusieurs filieres qui ouvrent les portes aux diplomations de CQP et DQP.</p>
            </div>

            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Departement des Tic</p>
                <p className="mt-2 text-sm text-slate-500">c'est le departement du traitement des donnees analytiques a l'aide d'un ordinateur diplomation CQP et DQP</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Departement Grapisme 2D/3D</p>
                <p className="mt-2 text-sm text-slate-500">le traitement des videos et des images se fait de manieres professionelles sanctionner par CQP et DQP.
                    top institutions worldwide.</p>
            </div>


            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Departement Multimedia</p>
                <p className="mt-2 text-sm text-slate-500">C'est le departement des montages videos , des prisses de song et des traitements multimedia sanctionner par un CQP et DQP.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Departement Industrielle Technologique</p>
                <p className="mt-2 text-sm text-slate-500">Ici la pratique des ateliers et des techniques de technologies avancées ont le mettre mot, capacite par un CQP et DQP.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">Departement Genie Civil
                    Visa Advice</p>
                <p className="mt-2 text-sm text-slate-500">C'est le genie du batiment et des travaux publics , sanctionner par un CQP et DQP.
                </p>
            </div>




        </div>

        {/* <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center"> */}
        <div className="w-full   bg-firstColor shadow-xl shadow-indigo-200 py-10 px-20 flex flex-col md:flex-row justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">Contactez Nous</span> <br/> <span className="text-lg">Pour votre enrollement et pour toutes informations suplementaires nous joindres sur Whatsapp </span></p>
            <a className='mt-5 md:mt-0' href="https://api.whatsapp.com/send?phone=655840109" target="_blank" rel="noopener noreferrer"><button className="px-5 py-3 rounded-full  font-medium text-slate-700 shadow-xl  hover:bg-slate-200 duration-150  bg-white "><img className='w-28' src={whatsapp} alt="whatsapp" /> </button></a>
        </div>

    </div>
    </div>
  )
}

export default Formations
