import React from 'react'

import './avant-garde.css'
import tru from './assets/true.png'

const AvantGarde = () => {
  return (
    <div className='avant-garde my-7'>
        <div className="avant-left ">
            <h2>Our learning Platform</h2>
            <h3 className='mt-6'>Our platform Many Courses</h3>
            <div className='avant-text mt-16'>
                <div className='avant-i'><i><img src={tru} alt='bonne formation' /></i><p className='ms-5'>Ecole d'apprentissage pratique et facile</p></div>
                <div className='avant-i'><i><img src={tru} alt='bonne formation' /></i><p className='ms-5'>Ecole d'apprentissage pratique et facile</p></div>
                <div className='avant-i'><i><img src={tru} alt='bonne formation' /></i><p className='ms-5'>Ecole d'apprentissage pratique et facile</p></div>
            </div>
        </div>
        <div className="avant-right">
            <div className='avant-c'>
                <i></i>
                <p>Besoin d'aide, appelez-nous <br /> <p className='text-xl'>(+237) 655 840 109 / (+237) 653 692 328</p></p>
            </div>
        </div>
    </div>
  )
}

export default AvantGarde