import React, { useState, useEffect } from 'react';
import background from '../assets/back.webp';
import gamejam from '../assets/gamejam.webp';
import iphone from '../assets/iphone.webp';
import game from '../assets/game.webp';
import useScrollPosition from './useScrollPosition';
import KeyFeatures from './KeyFeatures';
import Press from './Press';
import Screenshots from './Screenshots';

const Hero = () => {
  const scrollPosition = useScrollPosition();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const offsets = Array.from(sections).map(section => ({
      id: section.id,
      offset: section.offsetTop
    }));

    let active = 'home';
    for (let i = offsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i].offset) {
        active = sections[i].id;
        break;
      }
    }

    setActiveSection(active);
  }, [scrollPosition]);

  const handleDotClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="h-screen">
        <div className="h-screen w-screen relative">
          <img src={background} className="h-full w-full object-cover z-0" alt="background" />
          <img src={gamejam} className="absolute top-4 left-48 z-10" alt="gamejam" />
          <div className='absolute font-main text-[#f2b386] text-3xl top-6 left-64 z-10'>
            Game <br /> Jam
          </div>

          {/* Navigation Links */}
          <div
            className='absolute top-8 right-[500px] text-2xl font-main text-[#f2b386] cursor-pointer group z-10'
            onClick={() => handleDotClick('key-features')}
          >
            Key Features
            <span className='block h-[2px] bg-[#f2b386] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100'></span>
          </div>
          <div className='absolute top-8 right-[370px] text-2xl font-main text-[#f2b386] cursor-pointer group z-10'
            onClick={() => handleDotClick('screenshots')}
          >
            Screenshots
            <span className='block h-[2px] bg-[#f2b386] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100'></span>
          </div>
          <div className='absolute top-8 right-[300px] text-2xl font-main text-[#f2b386] cursor-pointer group z-10'
            onClick={() => handleDotClick('press')}
          >
            Press
            <span className='block h-[2px] bg-[#f2b386] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100'></span>
          </div>
          <div className='absolute top-8 right-[225px] text-2xl font-main text-[#f2b386] cursor-pointer group z-10'
            onClick={() => handleDotClick('blog')}
          >
            Blog
            <span className='block h-[2px] bg-[#f2b386] scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100'></span>
          </div>

          <div className="group z-20">
            <img
              src={iphone}
              className="absolute right-64 bottom-10 h-[600px] mb-[55px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              alt="iphone"
            />
            <img
              src={game}
              className="absolute right-[270px] bottom-[115px] h-[475px] mb-[55px] transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              alt="game"
            />
          </div>

          <div className='absolute font-main font-bold text-white text-5xl top-64 left-72 z-10'>Massey Game Jam</div>
          <div className='absolute font-body font-thin text-white text-xl top-[310px] left-72 z-10'>Join the Ultimate Game Development Challenge</div>

          <div className='absolute font-body font-thin text-white text-2xl top-[390px] left-72 z-10'>
            Massey Game Jam is the premier platform for<br /> game developers to showcase their talent and <br /> creativity. It's an opportunity to collaborate, <br /> innovate, and create unique gaming experiences.<br /> Join us for an unforgettable game jam where you <br /> can turn your ideas into reality
          </div>
        </div>
      </section>

      <KeyFeatures />
      <Screenshots />
      <Press />

      {/* Dots Navigation */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {['home', 'key-features', 'screenshots', 'press', 'blog'].map((section, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-transform duration-300 ${
              activeSection === section ? 'bg-[#eda390]' : 'border-2 border-[#eda390]'
            }`}
            onClick={() => handleDotClick(section)}
          />
        ))}
      </div>
    </>
  );
};

export default Hero;
