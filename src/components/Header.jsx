import React, { useState } from "react";
import { FaReact, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {/* Logo with text */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-2xl font-bold text-indigo-400 tracking-wide">
                        Sarfaraj Shaikh
                    </h1>
                </div>

                {/* Desktop menu */}
                <nav className="hidden md:flex gap-6 font-medium text-white">
                    <a href="#home" className="hover:text-indigo-500">Home</a>
                    <a href="#about" className="hover:text-indigo-500">About</a>
                    <a href="#projects" className="hover:text-indigo-500">Projects</a>
                    <a href="#contact" className="hover:text-indigo-500">Contact</a>
                </nav>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl text-gray-700">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white px-6 pb-4 shadow-md">
                    <nav className="flex flex-col gap-4 font-medium text-gray-700">
                        <a href="#home" className="hover:text-indigo-500">Home</a>
                        <a href="#about" className="hover:text-indigo-500">About</a>
                        <a href="#projects" className="hover:text-indigo-500">Projects</a>
                        <a href="#contact" className="hover:text-indigo-500">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
