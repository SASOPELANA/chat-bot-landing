import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoChat from '../assets/icons/robot-de-chat.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={closeMenu}
        >
          <img src={LogoChat} className="h-7" alt="Chat bot Logo" />
          <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">
            Chat Bot IA
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 pt-4 bg-white space-y-2 border-t border-gray-200 md:space-y-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent md:pt-0">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 font-semibold rounded md:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0"
                aria-current="page"
              >
                Chat Bot
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:bg-transparent"
              >
                Servicio
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:bg-transparent"
              >
                Contacto
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/SASOPELANA/chat-bot-landing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block py-2 px-3 text-gray-900 font-semibold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 md:dark:hover:bg-transparent"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
