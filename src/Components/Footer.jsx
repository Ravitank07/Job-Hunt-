import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h2 className="text-white text-2xl font-bold mb-4">
          Want to Become a Success Employer?
        </h2>
        <p className="text-white text-lg mb-6">
          We'll help you to grow your career and growth.
        </p>
        <button className="bg-white text-purple-600 font-medium py-2 px-4 rounded-md hover:bg-purple-500 hover:text-white transition duration-300">
          Apply Today
        </button>
      </div>
    </footer>
  );
};

export default Footer;
