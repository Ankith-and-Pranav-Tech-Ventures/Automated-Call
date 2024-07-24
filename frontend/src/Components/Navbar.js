import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const toggleMenu = () => {
        document.querySelector('.mobile-menu').classList.toggle('hidden');
    };

    return (
        <nav className="bg-gray-800 p-4 border-b-2 sticky top-0 z-20">
            {/* Laptop Navbar */}
            <div className="container mx-auto flex justify-between items-center">
                <Link to={'/'} className="text-white text-xl font-bold">CallBotix</Link>
                <div className="hidden xl:flex space-x-6">
                    <Link to={'/'} className="text-white hover:text-yellow-500">Home</Link>
                    <Link to={'/ContactUs'} className="text-white hover:text-yellow-500">Contact Us</Link>
                    <Link to={'/AboutUs'} className="text-white hover:text-yellow-500">About Us</Link>
                    <Link to={'/Login'} className="text-white hover:text-yellow-500">Login</Link>
                </div>

                {/* Mobile Navbar */}
                <div className="xl:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-white mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="hidden mobile-menu">
                <Link to={'/'} className="block py-2 px-4 text-sm text-white hover:text-yellow-500">Home</Link>
                <Link to={'/ContactUs'} className="block py-2 px-4 text-sm text-white hover:text-yellow-500">Contact Us</Link>
                <Link to={'/AboutUs'} className="block py-2 px-4 text-sm text-white hover:text-yellow-500">About Us</Link>
                <Link to={'/Login'} className="block py-2 px-4 text-sm text-white hover:text-yellow-500">Login</Link>
            </div>
        </nav>
    );
}

export default Navbar;
