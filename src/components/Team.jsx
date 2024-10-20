import React from 'react'
import appscreen1 from '../assets/appscreen01.png'
import appscreen2 from '../assets/appscreen2.png'
import appscreen3 from '../assets/appscreen03.png'
import yaksh from '../assets/yaksh.jpg'
import jad from '../assets/jad.png'
import gurjas from '../assets/gurjas.png'

const Team = () => {
  return (
    <section id = "Team" className='bg-or h-screen w-screen top-[-50px] overflow relative'>
        <div className='absolute text-[#4a2359] text-4xl right-[550px] top-[100px]'>
            Meet The Organizers
        </div>

        <div>
            <img src={appscreen1} className='absolute w-72 top-[230px] left-[225px]'></img>
            <img src={appscreen2} className='absolute w-72 top-[230px] left-[625px]'></img>
            <img src={appscreen3} className='absolute w-72 top-[230px] left-[1025px]'></img>
        </div>

        <div>
            <img src={jad} className='absolute w-48 h-[275px] top-[280px] left-[270px] rounded-xl'></img>
            <img src={yaksh} className='absolute w-52 top-[280px] left-[665px] rounded-xl'></img>
            <img src={gurjas} className='absolute w-52 top-[280px] left-[1070px] rounded-xl'></img>
        </div>

    </section>
  )
}

export default Team