import React from 'react';
import profileImg from './Profile.jpg';
import resumeFile from './resume (2).pdf';

const Hero = () => {
    return (
        <section
            id="hero"
            className="bg-gray-950 text-white py-20 px-4 md:px-20 flex items-center justify-center"
        >
            {/* Animated Wrapper */}
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center animate-float">
                {/* Profile with Animated Frame */}
                <div className="relative w-56 h-56 mb-8">
                    {/* Rotating gradient border */}
                    <div className="absolute inset-0 rounded-full p-[6px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow shadow-2xl">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                            <img
                                src={profileImg}
                                alt="Shaikh Sarfaraj"
                                className="w-48 h-48 object-cover rounded-full border-4 border-gray-900 shadow-md"
                            />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-3">
                    Hi, I'm <span className="text-indigo-400">Shaikh Sarfaraj</span>
                </h1>
                <p className="text-xl mb-6 text-gray-300">
                    Frontend Developer / Web Designer
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="#contact"
                        className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md text-white font-semibold transition"
                    >
                        Hire Me
                    </a>
                    <a
                        href={resumeFile}
                        className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white px-6 py-3 rounded-md font-semibold transition"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
