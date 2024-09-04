import React from 'react'
import arc from '../assets/round.webp'
import planet from '../assets/planet.webp'
import alien from '../assets/alien.webp'

const KeyFeatures = () => {
  return (
    <section id="key-features" className="h-screen w-screen overflow-hidden">
    <div>
        <img src={arc} className=' mt-[-55px] h-full w-full '></img>
        <img src={planet} className= 'absolute mt-[-10px] h-full w-full '></img>
        </div>

          <div >
            <img src={alien} className='absolute h-[500px] w-65 left-48 transform -translate-y-1/2 z-30 animate-float' alt="Alien" />
          </div>


        <div className="relative left-36 top-[120px] flex flex-col items-center h-full ">
        <div className="mt-8 lg:mt-0 lg:ml-12">
          <h2 className="text-5xl font-bold text-[#5a395b]">What to Expect</h2>
          <p className="text-2xl text-[#5a395b] mt-4">2023 Game Jam Event</p>
          <ul className="text-lg text-[#5a395b] mt-6 space-y-2 max-w-lg">
            <li>• Participate in intense game development sessions and learn from industry experts.</li>
            <li>• Network with fellow game developers, artists, and designers to form teams and bring your game concept to life.</li>
            <li>• Showcase your game to a panel of experienced judges and compete for exciting prizes and recognition.</li>
            <li>• Immerse yourself in a supportive and vibrant community passionate about game development.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures