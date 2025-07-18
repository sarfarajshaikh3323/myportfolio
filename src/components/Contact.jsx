import React from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-gray-950 to-gray-950 text-white py-20 px-6"
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-12">
                    <span className="text-indigo-400">Contact</span> Me
                </h2>

                <form
                    action="https://formspree.io/f/your_form_id"
                    method="POST"
                    className="grid grid-cols-1 gap-6 max-w-xl mx-auto text-left"
                >
                    <div className="relative">
                        <FaUser className="absolute top-3.5 left-3 text-gray-500" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="relative">
                        <FaEnvelope className="absolute top-3.5 left-3 text-gray-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="relative">
                        <FaCommentDots className="absolute top-3.5 left-3 text-gray-500" />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                            className="pl-10 p-3 w-full rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 transition-colors py-3 rounded-md font-semibold text-white"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
