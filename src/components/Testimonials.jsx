import React from "react";

const testimonials = [
    {
        name: "Amit Verma",
        role: "Startup Founder",
        feedback:
            "Shaikh Sarfaraj delivered our landing page with clean code, fast performance, and stunning design. Highly recommended!",
    },
    {
        name: "Pooja Sharma",
        role: "Freelance Designer",
        feedback:
            "Working with Sarfaraj was smooth and professional. He has a strong command of React and Tailwind CSS.",
    },
    {
        name: "Rakesh Mehta",
        role: "Digital Marketer",
        feedback:
            "He fixed major bugs on our client’s site in no time. Great communication and support!",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="bg-gradient-to-br from-gray-950 to-gray-950 text-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    Client <span className="text-indigo-400">Testimonials</span>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:shadow-xl transition duration-300"
                        >
                            <p className="text-gray-300 italic mb-4">
                                “{t.feedback}”
                            </p>
                            <div className="border-t border-gray-700 pt-4">
                                <p className="text-indigo-400 font-semibold">
                                    {t.name}
                                </p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
