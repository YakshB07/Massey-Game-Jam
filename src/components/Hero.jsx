import React from 'react'
import background from '../assets/back.webp'
import gamejam from '../assets/gamejam.webp'
import iphone from '../assets/iphone.webp'
import game from '../assets/game.webp'

const Hero = () => {
  return (
    <div className="relative h-screen w-screen">
      <img src={background} className="fixed h-full w-full object-cover" alt="background" />
      <img src={gamejam} className="absolute top-4 left-48" alt="gamejam" />
      <div className='absolute font-main text-[#f2b386] text-3xl  top-6 left-64'>
        Game <br/> Jam
      </div>

      <div className='absolute top-8 right-[500px] text-2xl font-main text-[#f2b386] cursor-pointer'> Key Features </div>
      <div className='absolute top-8 right-[375px] text-2xl font-main text-[#f2b386] cursor-pointer'> Screenshots </div>
      <div className='absolute top-8 right-[300px] text-2xl font-main text-[#f2b386] cursor-pointer'> Press </div>
      <div className='absolute top-8 right-[225px] text-2xl font-main text-[#f2b386] cursor-pointer'> Blog </div>

    <div>

    </div>

      <div>
        <img src={iphone} className='absolute right-72 bottom-10'></img>
        <img src={game} className='absolute right-[305px] bottom-[115px]' />
      </div>

      <div className='absolute font-main font-bold text-white font-3xl'> Massey Game Jam</div>

    </div>
  )
}

export default Hero

