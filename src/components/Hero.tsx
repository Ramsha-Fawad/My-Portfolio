import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen relative pt-20">
      
      <div className="fixed top-0 left-0 w-full z-20">
        <Navbar />
      </div>

      {/* Mobile-only Background Image */}
      <div
        className="sm:block lg:hidden w-full h-[40vh] bg-no-repeat bg-cover bg-center mt-20"
        style={{
          backgroundImage: "url('/profile.png')",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Hero Content */}
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] lg:pt-20 z-10">
        {/* Desktop-only Background Image */}
        <div
          className="hidden lg:block bg-no-repeat bg-left h-full"
          style={{
            backgroundImage: "url('/profile.png')",
            backgroundSize: "85%",
          }}
        ></div>

        {/* Text Content */}
        <div className="text-[40px] sm:text-[80px] font-bold leading-tight flex justify-center items-center text-center">
          <div>
            <p data-aos="zoom-in-up">Hi! I'm</p>
            <p data-aos="zoom-in-up">Ramsha</p>
            <p data-aos="zoom-in-up">Fawad.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
