import React from 'react';

const Hero = ({title}) => {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-12 text-center border-b-4 border-purple-500">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://www.moneyquizx.online/job/fresherjob.in/assets/resources/assets/img/banner-10.jpg')`, // Correct image URL
          opacity: 0.6, 
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      </div>
    </div>
    
  );
};

export default Hero;
