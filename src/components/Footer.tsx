import LogoChat from '../assets/icons/robot-de-chat.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={LogoChat} className="h-7" alt="Flowbite Logo" />
            <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">
              Chat Bot IA
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                Nosotros
              </Link>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Politica de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licencia
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">
          © {year}{' '}
          <a
            href="https://github.com/SASOPELANA/chat-bot-landing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Chat Bot IA
          </a>
          . Todos los Derechos Reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
