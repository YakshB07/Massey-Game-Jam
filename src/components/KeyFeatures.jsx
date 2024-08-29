import React from 'react'
import arc from '../assets/round.webp'
import planet from '../assets/planet.webp'

const KeyFeatures = () => {
  return (
    <section id="key-features" className="h-screen">
    <div>
        <img src={arc} className='mt-[-55px] h-full w-ful'></img>
        <img src={planet} className='mt-[-10px] h-max w-full'></img>
    </div>
    </section>
  )
}

export default KeyFeatures