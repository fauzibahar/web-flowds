import logoLight from '../assets/img/logo/CRAZETIVE LOGO white.png';
import logoDark from '../assets/img/logo/CRAZETIVE LOGO.png';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        header
          ? 'text-[#13677A] bg-white shadow-md'
          : 'text-white bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto py-6 px-6 md:px-12 h-full flex items-center justify-between">
        {/* Logo */}
        
          <a href="#home" aria-label="Navigate to homepage" className="cursor-pointer">
            <img
              src={header ? logoDark : logoLight}
              alt="Logo Flowds"
              className="w-48 transition-all duration-300"
              height="auto"
            />
          </a>
        

        {/* Navigation */}
        <nav role="navigation" aria-label="Main navigation">
          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden block focus:outline-none transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <X
                size={28}
                className={`${header ? 'text-[#13677A]' : 'text-white'}`}
                aria-hidden="true"
              />
            ) : (
              <Menu
                size={28}
                className={`${header ? 'text-[#13677A]' : 'text-white'}`}
                aria-hidden="true"
              />
            )}
          </button>

          {/* Mobile Navigation */}
          <nav
            id="mobile-menu"
            className={`absolute left-0 right-0 top-full w-full py-6  transition-all duration-300 ${
              isOpen
                ? 'opacity-100 scale-y-100'
                : 'opacity-0 scale-y-0 pointer-events-none'
            } md:hidden ${
              header ? 'bg-[#13677A] text-white ' : ' bg-white text-[#13677A]'
            }`}
            aria-hidden={!isOpen}
          >
            <ul
              role="menu"
              className="flex flex-col items-center justify-center gap-4"
            >
              {navLinks.map((navLink, index) => (
                <li key={index} className="relative group" role="none">
                  <a
                  href={navLink.to}
                    onClick={() => setIsOpen(false)}
                    className={`cursor-pointer pb-2 transition duration-300 text-base ${
                      header ? ' text-white' : 'text-[#13677A]'
                    }`}
                    role="menuitem"
                    aria-label={`Navigate to ${navLink.name}`}
                  >
                    {navLink.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 ${
                        header ? 'bg-white' : ' bg-[#13677A]'
                      } group-hover:w-full`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4" role="menubar">
              {navLinks.map((navLink, index) => (
                <li key={index} className="relative group" role="none">
                  <a
                    href={navLink.to}
                    className={`cursor-pointer pb-2 transition duration-300 md:text-lg md:font-normal ${
                      header ? 'text-[#13677A]' : 'text-white'
                    }`}
                    role="menuitem"
                    aria-label={`Navigate to ${navLink.name}`}
                  >
                    {navLink.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-0 h-[2px] transition-all duration-300 ${
                        header ? 'bg-[#13677A]' : 'bg-white'
                      } group-hover:w-full`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </div>
    </header>
  );
};

export default Header;
