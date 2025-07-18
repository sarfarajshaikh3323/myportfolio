import React, { useState } from "react";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo / Name */}
                <div className="flex items-center gap-2">
                    <FaReact className="text-indigo-400 text-3xl animate-spin-slow" />
                    <h1 className="text-2xl font-bold text-indigo-400 tracking-wide">
                        Sarfaraj Shaikh
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-indigo-400 font-medium transition duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-gray-300 text-2xl focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mt-2 px-4 space-y-2 pb-4">
                    {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-indigo-400 font-medium transition duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
