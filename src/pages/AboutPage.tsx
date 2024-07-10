import React from "react";

const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum felis non arcu consectetur, ac fermentum leo ultricies. Phasellus at congue lectus.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    Fusce eleifend, nisl sed cursus venenatis, est nisi commodo nunc, id sodales est odio a nulla.
                </p>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Vivamus et nunc vel tortor pulvinar fermentum. Aliquam erat volutpat. Sed ac eros sed ligula tincidunt laoreet.
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Email: rapais@xaropinho.com</li>
                        <li>Phone: 4002-8922</li>
                        <li>Address: Avenida das Comunicações, 04, Industrial Anhangüera, Osasco – SP</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
