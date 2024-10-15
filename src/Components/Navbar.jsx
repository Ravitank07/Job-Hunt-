import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'; // Mobile menu icons
import { NavLink } from 'react-router-dom'; // Use NavLink instead of Link
import Logo from '../Assets/logo.png'; // Ensure this path is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Automatically close menu on link click
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" onClick={closeMenu}>
              <img src={Logo} alt="Logo" className="h-[10rem] w-auto" />
            </NavLink>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <NavLink to="/" className={({ isActive }) => `text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}>
                Search Jobs
              </NavLink>
              {/* Dropdown on hover for desktop */}
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hidden md:block">
                <NavLink
                  to="/all-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  All Jobs
                </NavLink>
                <NavLink
                  to="/jobs-for-you"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for You
                </NavLink>
                <NavLink
                  to="/jobs-for-freshers"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Freshers
                </NavLink>
                <NavLink
                  to="/work-from-home-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Work From Home
                </NavLink>
                <NavLink
                  to="/jobs-for-women"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Women
                </NavLink>
                <NavLink
                  to="/jobs-for-college-student"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for College Students
                </NavLink>
                <NavLink
                  to="/part-time-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Part-Time Jobs
                </NavLink>
                <NavLink
                  to="/it-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  IT Jobs
                </NavLink>
                <NavLink
                  to="/engineering-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Engineering Jobs
                </NavLink>
                <NavLink
                  to="/walk-in-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Walk-In Jobs
                </NavLink>
                <NavLink
                  to="/remote-jobs"
                  className={({ isActive }) => `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Remote Jobs
                </NavLink>
              </div>
            </div>

            <NavLink to="/work-from-home-jobs" className={({ isActive }) => `text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}>
              Work From Home
            </NavLink>
            <NavLink to="/fresher-job" className={({ isActive }) => `text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}>
              Fresher Job
            </NavLink>
            <NavLink to="/privacy-policy" className={({ isActive }) => `text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}>
              Privacy Policy
            </NavLink>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => `px-4 py-2 text-sm font-medium rounded-sm ${isActive ? 'text-white bg-purple-600' : 'text-white bg-purple-700'} hover:bg-purple-600`}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div>
            {/* Dropdown toggle for mobile with icon */}
            <button
              onClick={toggleDropdown}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-500 flex justify-between items-center"
            >
              Search Jobs <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                <NavLink
                  to="/all-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  All Jobs
                </NavLink>
                <NavLink
                  to="/jobs-for-you"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for You
                </NavLink>
                <NavLink
                  to="/jobs-for-freshers"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Freshers
                </NavLink>
                <NavLink
                  to="/work-from-home-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Work From Home
                </NavLink>
                <NavLink
                  to="/jobs-for-women"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for Women
                </NavLink>
                <NavLink
                  to="/jobs-for-college-student"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Jobs for College Students
                </NavLink>
                <NavLink
                  to="/part-time-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Part-Time Jobs
                </NavLink>
                <NavLink
                  to="/it-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  IT Jobs
                </NavLink>
                <NavLink
                  to="/engineering-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Engineering Jobs
                </NavLink>
                <NavLink
                  to="/walk-in-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Walk-In Jobs
                </NavLink>
                <NavLink
                  to="/remote-jobs"
                  onClick={closeMenu} // Close menu on link click
                  className={({ isActive }) => `block px-3 py-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 ${isActive ? 'text-purple-500' : ''}`}
                >
                  Remote Jobs
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/work-from-home"
            onClick={closeMenu}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}
          >
            Work From Home
          </NavLink>
          <NavLink
            to="/fresher-job"
            onClick={closeMenu}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}
          >
            Fresher Job
          </NavLink>
          <NavLink
            to="/privacy-policy"
            onClick={closeMenu}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-purple-500 ${isActive ? 'text-purple-500' : ''}`}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="/contact-us"
            onClick={closeMenu}
            className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium text-white bg-purple-500 hover:bg-purple-600`}
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
