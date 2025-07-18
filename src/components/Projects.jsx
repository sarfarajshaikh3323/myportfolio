import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "Portfolio Website",
        description:
            "My personal portfolio built with React and Tailwind CSS showcasing my work and skills.",
        github: "https://github.com/sarfarajshaikh3323",
        live: "https://your-portfolio-site.netlify.app/",
    },
    {
        title: "Lockify - Password Manager",
        description:
            "A secure password manager app using React, PHP & MySQL with full CRUD functionality.",
        github: "https://github.com/sarfarajshaikh3323",
        live: "#",
    },
    {
        title: "Responsive Landing Page",
        description:
            "A modern, mobile-first landing page using HTML, Tailwind CSS, and basic JS animations.",
        github: "https://github.com/sarfarajshaikh3323",
        live: "#",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="bg-gray-950 text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">
                    <span className="text-indigo-400">My</span> Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:scale-[1.02] transition-transform duration-300"
                        >
                            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-center space-x-6 text-indigo-400">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:text-indigo-300 text-sm"
                                >
                                    <FaGithub /> GitHub
                                </a>

                                {project.live !== "#" && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 hover:text-indigo-300 text-sm"
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
