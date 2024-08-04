import React from 'react';
import Menubar from '../../Components/Menubar';

const Home = () => {
    return (
        <div className='pt-10'>
            <div className='absolute top-20'>
                <Menubar />
            </div>
            <div className="flex">
                <div className="flex-grow p-6 bg-gray-100 min-h-screen">
                    <div className="bg-blue-600 text-white p-5 xl:p-10 rounded-lg shadow-lg mb-10">
                        <h1 className="text-xl xl:text-3xl font-bold mb-4">Welcome to CallBotix's Automated Call Service.</h1>
                        <p className="text-sm xl:text-lg mb-4">A comprehensive automated call system designed to operate entirely without human intervention.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Schedule Call</h2>
                                <p className="text-gray-700 mb-4">Easily schedule your calls here. Select the date, time, and other details to get started.</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Schedule Now</button>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Send Call</h2>
                                <p className="text-gray-700 mb-4">Send calls to your contacts instantly. Manage your call settings and start your call now.</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Send Call</button>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Call Logs</h2>
                                <p className="text-gray-700 mb-4">View and manage your call logs. Track call history and details easily.</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">View Logs</button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Profile</h2>
                                <p className="text-gray-700 mb-4">Manage your profile settings and personal information.</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Edit Profile</button>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">Customise Call</h2>
                                <p className="text-gray-700 mb-4">You Can Customise The Call Experience By Contacting Developer</p>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Contact Developer</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-gray-800 p-4 border-t-2">
                <div className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-xl font-bold">CallBotix</h1>
                        <p className="text-sm">© 2024 Ankith and Pranav Tech Ventures. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
