import React, { useState, useEffect } from 'react';
import MainImage from "/src/assets/Donation.png"; 
import SubImage1 from "/src/assets/Smile1.png";
import SubImage2 from "/src/assets/Smile2.png";
import SubImage3 from "/src/assets/Smile3.png";
import CountUp from 'react-countup';




const AboutUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  SubImage1,
  SubImage2,
  SubImage3,
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, 2000); // Change slide every 2 seconds

  return () => {
    clearInterval(interval);
  };
}, [slides.length]);

  return (

    <div className="flex flex-col w-full items-center bg-blue-1000 text-white py-12">
    <header className="text-center mb-8">
      <h1 className="text-3xl sm:text-5xl py-1">About us</h1>
      <span className="block bg-gradient-to-b from-blue-700 to-white-400 w-20 mx-auto h-1"></span>
    </header>

    <section className="text-center max-w-3xl mb-12 px-4">
      <p className="mt-5 text-base">
        At Trustwave, we envision a world where financial boundaries are obsolete, and dreams are within reach for everyone, everywhere. Leveraging the unparalleled potential of cryptocurrency, we are committed to creating a crowdfunding platform where both innovators and supporters can come together in a secure, transparent, and efficient ecosystem.
      </p>
      
    </section>

    <section className="flex flex-col md:flex-row items-center justify-between mb-12 space-y-8 md:space-y-0">
  <div className="w-full md:w-1/2 max-w-3xl rounded-lg">
    <img src={MainImage} alt="Donation image" className="w-full rounded-lg shadow-lg" />
  </div>
  <div className="w-full md:w-1/2 max-w-xl md:pl-8">
    <p className="mt-5 md:mt-0 text-3xl">
      Join us in redefining what’s possible and in building a future where innovation thrives, sustained by the people, for the people.
    </p>
  </div>
</section>


    <section className="text-center mb-12">
      <p className="text-3xl sm:text-5xl py-1">
        A global community of people helping one another
      </p>
    </section>

    <section className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mb-12">
      <div className="relative w-60 h-60">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} rounded-lg`}
          />
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">
      <div className="flex flex-col items-center">
      <p className="header text-3xl sm:text-5xl text-white py-1">
        <CountUp start={0} end={100000} duration={100009} delay={0}/>+
      </p>
      <span className="text-white mt-2">individual donations</span>
    </div>
    
    <div className="flex flex-col items-center">
      <p className="header text-3xl sm:text-5xl text-white py-1">
        $<CountUp start={100} end={100000000} duration={1000000} delay={0}/>+
      </p>
      <span className="text-white mt-2">raised by our community</span>
    </div>
    
    <div className="flex flex-col items-center">
      <p className="header text-3xl sm:text-5xl text-white py-1">
        1/sec
      </p>
      <span className="text-white mt-2">a donation is made every second on TrustWave</span>
    </div>
      </div>
    </section>
  </div>
    
  );
};

export default AboutUs