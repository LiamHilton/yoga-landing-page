import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  const toggleMenu = () => setMenuOpen(!menuOpen);


   // Close menu when "Esc" key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup event listener when component unmounts or menu closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [
    { name: "About", href: "#mission" },
    { name: "Classes", href: "#classes" },
    { name: "Packages", href: "#pricing" },
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar__logo">YogaFlow</div>
       


      {/* Navigation Links */}
      <ul className={`navbar__links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} role="menuitem">{link.name}</a>
          </li>
        ))}
        
        {/* Contact button inside mobile menu */}
        <li className="mobile-contact">
          <button className="navbar__button">Contact</button>
        </li>
      </ul>

      {/* Contact Button (Visible on Desktop Only) */}
      <a href='#contact'className="navbar__button desktop-contact">Contact</a>

      {/* Hamburger Menu */}
      <button
        className="navbar__hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
