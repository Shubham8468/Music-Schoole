import React from "react";

const Footer = () => {
    return (

        <footer className="bg-black text-neutral-300 ">
            <hr className="w-full py-10 bg-netural-300"></hr>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="text-white text-lg font-semibold mb-4  font-bold">About Us</h2>
                    <p className="mb-4 text-sm">
                        Music School is a premier institution dedicated to teaching the art
                        and science of music. We nurture talent from the ground up,
                        fostering a vibrant community of musicians.
                    </p>
                </div>
                <div>
                    <h2 className="text-netrul-300 text-lg font-semibold mb-4 font-bold">Quick Links</h2>
                    <ul className="text-sm">
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Courses
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-netrul-300 text-lg font-semibold mb-4">Follow Us</h2>
                    <div className=" space-x-4 text-sm">
                        <a
                            href="https://www.linkedin.com/in/shubh386a/"
                            className="hover:text-white transition-colors duration-300"
                        >
                           Linkedin
                        </a>
                        <a
                            href="https://github.com/Shubham8468"
                            className="hover:text-white transition-colors duration-300"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://shubhamportfolio84.netlify.app"
                            className="hover:text-white transition-colors duration-300"
                        >
                            X (Formerly Twitter)
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-netrul-300 text-lg font-semibold mb-4 ">Contact Us</h2>
                    <div className="text-sm">
                    <p>Lucknow,Uttar Pradesh, India</p>
                    <p>Lucknow 226025</p>
                    <p>Email: shubh386a@gmail.com</p>
                    <p>Phone: 8468000825</p>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs pt-8 ">© 2026 Music School. All rights reserved.</p>
            <p className="text-center text-xs pt-5 pb-10 text-yellow-100">Designed & Developed by Shubham.</p>
           

        </footer >


    )
}

export default Footer;