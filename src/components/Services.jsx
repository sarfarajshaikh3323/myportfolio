import React from "react";
import {
    FaMobileAlt,
    FaLaptopCode,
    FaBug,
    FaRocket,
    FaFileAlt,
    FaPaintBrush,
} from "react-icons/fa";

const services = [
    {
        icon: <FaMobileAlt />,
        title: "Responsive Web Design",
        description: "Beautiful responsive sites with HTML, Tailwind & React.",
    },
    {
        icon: <FaLaptopCode />,
        title: "Frontend Development",
        description: "Modern UIs with React.js & performance-optimized layouts.",
    },
    {
        icon: <FaBug />,
        title: "Bug Fixing & Optimization",
        description: "Fix layout issues, bugs & improve SEO/performance.",
    },
    {
        icon: <FaRocket />,
        title: "Landing Pages",
        description: "Attractive, conversion-focused single page websites.",
    },
    {
        icon: <FaFileAlt />,
        title: "Portfolio / Resume Websites",
        description: "Showcase your work online with custom portfolio sites.",
    },
    {
        icon: <FaPaintBrush />,
        title: "Custom UI Design",
        description: "Clean, stylish UI components to match your brand.",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-20 px-6 bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12 text-white">
                    My <span className="text-indigo-400">Services</span>
                </h2>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="text-indigo-400 text-4xl mb-4 flex justify-center">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
