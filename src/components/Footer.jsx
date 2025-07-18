import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 mt-12">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Name and Rights */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Shaikh Sarfaraj</h2>
                    <p className="mt-2 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                {/* Right: Social Links */}
                <div className="flex justify-start md:justify-end space-x-6">
                    <a
                        href="https://github.com/sarfarajshaikh3323"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sarfarajshaikh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:shaikhsarfaraj240@gmail.com"
                        className="hover:text-white transition duration-300"
                    >
                        <FaEnvelope size={20} />
                    </a>
                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition duration-300"
                    >
                        <FaInstagram size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
