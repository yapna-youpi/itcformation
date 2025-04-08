import React from 'react'

import "./formation.css"
import Formations from "../../components/formations/Formations" 

const Formation = () => {
  return (
    <div className='formation text-orange-500'>
        <section className="backs">
        <h1 className="text-center text-6xl transform capitalize"></h1>
      </section>
      <div className="margins"></div>
      <br /><br /><br />
      <Formations/>
    </div>
  )
}

export default Formation
