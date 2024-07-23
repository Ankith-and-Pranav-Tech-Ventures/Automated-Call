import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4">
            <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-xl font-bold">CallBotix</h1>
                    <p className="text-sm">© 2024 Ankith and Pranav Tech Ventures. All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <Link to={'#'} className="text-white hover:text-yellow-500">Home</Link>
                    <Link to={'#'} className="text-white hover:text-yellow-500">Contact Us</Link>
                    <Link to={'#'} className="text-white hover:text-yellow-500">Login</Link>
                    <Link to={'#'} className="text-white hover:text-yellow-500">About Us</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
