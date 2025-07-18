import React from "react";

const skills = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Git & GitHub",
    "Responsive Design",
    "PHP (Basics)",
    "MySQL",
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gray-950 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    <span className="text-indigo-400">My</span> Skills
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-0">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 hover:bg-indigo-500 hover:text-white text-indigo-400 rounded-xl py-4 font-semibold shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
