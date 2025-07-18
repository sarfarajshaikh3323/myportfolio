import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
                    <h1 className="text-xl font-bold">My Portfolio</h1>
                </div>

                {/* Desktop Menu */}
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
            </div>
        </header>
    );
};

export default Header;
