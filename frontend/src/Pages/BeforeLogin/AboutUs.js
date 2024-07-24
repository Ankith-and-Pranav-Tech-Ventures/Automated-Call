import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const AboutUs = () => {
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
                <div className="container mx-auto bg-white shadow-md rounded-lg p-2 xl:p-6 xl:mt-10">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">CallBotix offers a comprehensive suite of services designed to enhance your business communication and customer interaction. Key features include:</h3>
                    <ul className="text-xl font-semibold text-gray-700 space-y-3 pl-5 list-inside">
                        <li className="list-disc">
                            Dedicated AI CallBotix Solutions: We customise CallBotix tailored to the specific needs of your company, capable of addressing queries and providing information seamlessly.
                        </li>
                        <li className="list-disc">
                            Human-Like Interaction: CallBotix communicates naturally, mimicking human conversation to ensure a smooth and engaging experience for your customers.
                        </li>
                        <li className="list-disc">
                            Fully Automated Calls: The entire process is automated, eliminating the need for human intervention and ensuring consistent performance and availability.
                        </li>
                        <li className="list-disc">
                            Universal Call Capability: CallBotix can initiate calls to any phone number, broadening your reach and enhancing customer service in India.
                        </li>
                        <li className="list-disc">
                            Query Resolution: We provide accurate and timely answers to customer questions, improving satisfaction and efficiency.
                        </li>
                        <li className="list-disc">
                            Appointment Management: CallBotix assists in managing appointments, offering a streamlined process for both you and your customers.
                        </li>
                        <li className="list-disc">
                            Scheduling: CallBotix can schedule appointments, ensuring that your calendar is organized and up-to-date.
                        </li>
                        <li className="list-disc">
                            Future Enhancements: We continuously work on adding new features and improvements to CallBotix to better serve your needs.
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
