import React, { useState } from 'react';
import { FaHome, FaPhone, FaPhoneSquare, FaPhoneAlt, FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Menubar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('home');

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsDrawerOpen(false);
    };

    return (
        <div>
            <nav className="bg-gray-800 p-2 border-b-2 fixed top-0 z-20 w-full flex justify-between items-center">
                <button className="text-white bg-primary hover:text-accent font-medium rounded-lg text-sm p-2.5 transition duration-300" type="button" onClick={toggleDrawer}>
                    {isDrawerOpen ? <AiOutlineClose className='w-5 h-5'/> : <FaBars className="w-5 h-5" />}
                </button>
                <div className="text-white text-2xl font-bold mr-2">
                    CallBotix
                </div>
            </nav>
            <div id="drawer-navigation" className={`fixed top-14 left-0 z-40 w-64 h-full p-4 overflow-y-auto transition-transform bg-primary ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`} tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-text uppercase">
                    Menu
                </h5>
                <div className="overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {[
                            { to: '/Home', label: 'Home', icon: FaHome, id: 'home' },
                            { to: '/SendCall', label: 'Send Call', icon: FaPhoneSquare, id: 'sendcall' },
                            { to: '/ScheduleCall', label: 'Schedule Call', icon: FaPhoneSquare, id: 'schedulecall' },
                            { to: '/CallOnWeb', label: 'Call On Web', icon: FaPhoneSquare, id: 'callonweb' },
                            { to: '/PhoneNumbers', label: 'Phone Numbers', icon: FaPhoneAlt, id: 'phonenumbers' },
                            { to: '/CallLogs', label: 'Call Logs', icon: FaPhone, id: 'calllogs' },
                            { to: '/Profile', label: 'Profile', icon: FaUser, id: 'profile' },
                            { to: '#', label: 'Contact Us', icon: FaPhone, id: 'contactus' },
                            { to: '/Logout', label: 'Logout', icon: FaSignOutAlt, id: 'logout' },
                        ].map((item) => (
                            <li key={item.id}>
                                <Link to={item.to} className={`flex items-center p-2 rounded-lg hover:text-accent ${selectedItem === item.id ? 'bg-white text-primary' : 'text-white'} group`} onClick={() => handleItemClick(item.id)}>
                                    <item.icon className={`w-5 h-5 ${selectedItem === item.id ? 'text-black' : 'text-gray-400'} transition duration-75 group-hover:text-accent`} />
                                    <span className="ml-3">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;
