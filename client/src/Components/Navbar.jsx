import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";
import "../Css/N.css";
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const navRef = useRef();
  let menuCheckboxRef=useRef();

  if (menuCheckboxRef.current) {
    menuCheckboxRef.current.checked = false;
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (navRef.current) {
        scrollHeight >= 50
          ? navRef.current.classList.add('stick-top')
          : navRef.current.classList.remove('stick-top');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="navbar flex items-center justify-center py-3.5 w-full bg-white z-[999] dark:bg-slate-900"
      ref={navRef}
    >
      <div className="menu flex items-center justify-between mx-5 xl:max-w-[1400px] w-full">
        {/* Mobile Menu Icon */}
        <label htmlFor="menu" className="sm:hidden">
          <IoMenu className="text-[30px] text-black mr-2.5 dark:text-white" />
        </label>

        {/* Logo */}
        <Logo />

        <div className="details-con flex items-center ">
          {/* Menu Toggle */}
          <input type="checkbox" id="menu" className="hidden peer" ref={menuCheckboxRef}/>

          {/* Menu List */}
          <div className="menu-list bg-white dark:max-sm:bg-slate-900 fixed top-0 left-[-100%] h-full z-50 w-[240px] px-1.5 peer-checked:left-[0] transition-all duration-200 ease-in-out sm:relative sm:left-0 sm:bg-transparent sm:w-auto sm:h-auto  max-xxs:w-full">
            {/* Close Button */}
            <label htmlFor="menu" className="flex justify-end py-2.5 sm:hidden">
              <RxCross2 className="text-[30px] text-black dark:text-white pr-1" />
            </label>

            {/* Nav Links */}
            <div className="list-con flex flex-col sm:flex-row items-start sm:items-center">
              <ul className="list-none">
                <li className="inline-block">
                  <Link to="/" className="flex py-2 px-3 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to="/about" className="flex py-2 px-3 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    About
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to="/services" className="flex py-2 px-3 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Services
                  </Link>
                </li>
                <li className="inline-block">
                  <Link to="/contact" className="flex py-2 px-3 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Contact
                  </Link>
                </li>
                {/* <li className="inline-block">
                  <Link to="/dashboard" className="flex py-2 px-3 text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    Dashboard
                  </Link>
                </li> */}
              </ul>

              {/* CTA Button */}
              <Link to="/book-meeting" className="btn-primary-M ml-0 sm:ml-4 mt-4 sm:mt-0 text-white bg-slate-900 hover:bg-slate-700 transition dark:bg-purple-700">
                Book Meeting
              </Link>
            </div>
          </div>

          {/* Profile Icon */}
          <div className="info ml-2.5">
            <div className="profile98 ">
              <Link to="/profile">
                <FaUser className="text-black dark:text-white text-2xl" />
              </Link>
            </div>
            
          </div>
                      <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
