
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"; // ✅ This is important

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
                {/* Logo with Name */}
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
                    <div>
                        <h1 className="text-xl font-bold text-indigo-400">Sarfaraj Shaikh</h1>
                        <p className="text-sm text-gray-300">My Portfolio</p>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-8 font-medium text-white">
                    {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-indigo-400 transition duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-2xl text-white">
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-800 px-6 pb-4 shadow-md">
                    <nav className="flex flex-col gap-4 font-medium text-gray-200">
                        {["About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-indigo-400 transition duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
