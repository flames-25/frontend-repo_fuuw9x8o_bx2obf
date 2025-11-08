import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Cancer Awareness & Support</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Empowering patients, caregivers, and communities with knowledge, compassion, and real stories of hope.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-500 transition">
              Get Support
            </a>
            <a href="#learn" className="inline-flex items-center rounded-md border border-white/20 px-5 py-3 text-white/90 hover:bg-white/10 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
