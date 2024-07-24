import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const ContactUs = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    scrollToTop();
    return (
        <div>
            <Navbar className='sticky top-0'/>
            <div className="bg-primary min-h-screen p-4">
                <div className="container mx-auto bg-white shadow-md rounded-lg p-6 xl:mt-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Email</label>
                            <input type="email" className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Your Email" />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold text-gray-700">Message</label>
                            <textarea className="w-full p-2 border border-gray-300 rounded mt-1" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary text-white p-2 rounded mt-4 hover:text-accent">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactUs
