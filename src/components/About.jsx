import React from 'react';
import profileImg from './Profile.jpg'; // make sure path is correct

const About = () => {
    return (
        <section id="about" className="bg-gray-950 text-white py-16 px-4 md:px-20">
            <div className="max-w-5xl mx-auto bg-[#1e293b] p-10 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-10">

                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src={profileImg}
                        alt="Shaikh Sarfaraj"
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-indigo-400 shadow-lg"
                    />
                </div>

                {/* About Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        Hello! I'm <span className="font-semibold text-white">Shaikh Sarfaraj</span>, a passionate and creative
                        <span className="text-indigo-400 font-medium"> Frontend Developer</span> in India. I'm currently pursuing my studies at
                        <span className="font-medium text-white"> Gujarat Technological University (GTU)</span>.
                    </p>
                    <p className="text-lg text-gray-300 mb-4">
                        I specialize in crafting beautiful, responsive, and user-friendly websites using
                        <span className="text-indigo-400"> HTML</span>, <span className="text-indigo-400"> CSS</span>,
                        <span className="text-indigo-400"> Tailwind CSS</span>, <span className="text-indigo-400"> JavaScript</span>, and
                        <span className="text-indigo-400"> React.js</span>.
                    </p>
                    <p className="text-lg text-gray-300">
                        I enjoy turning ideas into real-world projects and love collaborating with clients to bring visions to life.
                        Let's work together on something amazing!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
