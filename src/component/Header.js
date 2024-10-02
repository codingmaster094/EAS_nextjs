'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../public/img/logo.png'; // Adjust the path as per your folder structure
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    if (menuOpen) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="header-wrapper">
          <div className="menu-icon" onClick={handleMenuToggle}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 4.96696H27" stroke="#011527" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 15.2527H27" stroke="#011527" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 25.5384H13.2857" stroke="#011527" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link href="/" aria-label="Startseite">STARTSEITE</Link></li>
              <li><Link href="/pages/unternehmen" aria-label="Unternehmen">UNTERNEHMEN</Link></li>
              <li><Link href="/pages/team" aria-label="Team">TEAM</Link></li>
              <li><Link href="/pages/produkt-und-leistungs-portfolio" aria-label="Produkt und Leistungs-Portfolio">PRODUKT UND LEISTUNGS-PORTFOLIO</Link></li>
              <li><Link href="/pages/kontakt" aria-label="Kontakt">KONTAKT</Link></li>
              <li><Link href="/pages/dokumente" aria-label="Dokumente">DOKUMENTE</Link></li>
            </ul>
            <div className="close-icon" onClick={handleMenuToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                <path d="" stroke="none" fill="#080404" fillRule="evenodd" />
                <path
                  d="M 45.123 33.084 C 37.692 34.658, 32.785 41.006, 32.846 48.965 C 32.868 51.688, 33.409 54.948, 34.050 56.208 C 34.691 57.469, 79.601 102.938, 133.851 157.250 L 232.486 256 133.292 355.250 C 77.427 411.147, 33.640 455.730, 33.049 457.315 C 29.254 467.500, 35.055 478.393, 44.983 479.725 C 55.001 481.068, 47.619 487.738, 156.250 379.194 L 256 279.523 355.750 379.194 C 464.381 487.738, 456.999 481.068, 467.017 479.725 C 476.945 478.393, 482.746 467.500, 478.951 457.315 C 478.360 455.730, 434.574 411.148, 378.710 355.252 L 279.519 256.005 379.191 156.252 C 487.738 47.618, 481.068 55.001, 479.725 44.983 C 478.393 35.055, 467.500 29.254, 457.315 33.049 C 455.730 33.640, 411.148 77.426, 355.252 133.290 L 256.005 232.481 156.752 133.302 C 81.094 57.698, 56.787 33.974, 54.500 33.501 C 49.115 32.386, 48.540 32.360, 45.123 33.084"
                  stroke="none" fill="#040404" fillRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="logo">
            <Link href="/" aria-label="Logo">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11.0541" cy="11.059" r="7.06194" stroke="#011527" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.9985 20.0037L16.0469 16.052" stroke="#011527" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
