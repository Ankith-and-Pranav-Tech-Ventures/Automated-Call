import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import Image from '../../Images/HomeBackground.jpg';

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  scrollToTop();
  return (
    <div>
      <Navbar className='sticky top-0 z-20'/>
      <div>
        <div className='flex flex-col'>
          <div className='h-full w-full bg-cover bg-center relative' style={{ backgroundImage: `url(${Image})` }}>
            <div className='flex flex-col justify-center items-center h-full w-full text-white p-8 bg-black bg-opacity-50'>
              <h1 className='text-2xl xl:text-5xl font-bold mb-4'>Welcome to CallBotix Automated Call!</h1>
              <p className='text-sm xl:text-lg leading-relaxed text-center'>
                Experience the future of communication with CallBotix AI-powered voice call service. Engage in natural conversations as CallBotix AI assistant answers questions, completes tasks, and provides seamless interaction. Whether you're seeking information, managing appointments, or simply curious, CallBotix is here to enhance your experience with intuitive and intelligent responses.
              </p>
            </div>
            {/* Laptops */}
            <div className='hidden xl:block '>
              <div className='flex flex-col justify-center items-center bg-black bg-opacity-50 font-sans'>
                <div className='p-4 w-full max-w-md mx-4'>
                  <h2 className='text-xl font-semibold mb-4 text-center text-white'>Want a Call From CallBotix?</h2>
                  <div className='mb-4 p-2 flex flex-col items-center glassmorphism'>
                    <label className='block text-lg font-medium text-white mb-2'>What's Your Name?</label>
                    <input type='text' className='w-full border-b-2 border-white p-2 bg-transparent text-white focus:outline-none' placeholder='Pranav Raghavan C M' />
                  </div>
                  <div className='mb-4 p-2 flex flex-col items-center glassmorphism'>
                    <label className='block text-lg font-medium text-white mb-2'>What's Your Mobile Number?</label>
                    <input type='number' className='w-full border-b-2 border-white p-2 bg-transparent text-white focus:outline-none' placeholder='+91 9876543210' />
                  </div>
                  <div className='mb-4 p-2 flex flex-col items-center glassmorphism'>
                    <label className='block text-lg font-medium text-white mb-2'>How Did You Hear About Us?</label>
                    <select className='w-full border-b-2 border-white p-2 bg-transparent text-white focus:outline-none'>
                      <option value='' disabled selected className='bg-primary text-white'>Select</option>
                      <option value='google' className='bg-primary text-white'>Google Search</option>
                      <option value='facebook' className='bg-primary text-white'>Through a Friend</option>
                      <option value='twitter' className='bg-primary text-white'>Through Developer</option>
                      <option value='other' className='bg-primary text-white'>Other</option>
                    </select>
                  </div>
                  <div className='flex justify-center'>
                    <button className='p-1 w-full text-3xl rounded-lg text-white bg-slate-900 hover:text-accent'>Get a Call</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobiles */}
        <div className='xl:hidden flex flex-col justify-center items-center bg-text font-sans py-2 px-1'>
          <div className='bg-white shadow-md p-4 w-full max-w-md mx-4 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4 text-center text-text'>Want a Call From CallBotix?</h2>
            <div className='mb-4 p-2 flex flex-col items-center bg-primary rounded-lg'>
              <label className='block text-lg font-medium text-white mb-2'>What's Your Name?</label>
              <input type='text' className='w-full border-b-2 border-white p-2 bg-transparent text-white focus:outline-none' placeholder='Pranav Raghavan C M' />
            </div>
            <div className='mb-4 p-2 flex flex-col items-center bg-primary rounded-lg'>
              <label className='block text-lg font-medium text-white mb-2'>What's Your Mobile Number?</label>
              <input type='number' className='w-full border-b-2 border-white p-2 bg-transparent text-white focus:outline-none' placeholder='+91 9876543210' />
            </div>
            <div className='mb-4 p-2 flex flex-col items-center bg-primary rounded-lg'>
              <label className='block text-lg font-medium text-white mb-2'>How Did You Hear About Us?</label>
              <select className='w-full border-b-2 border-text p-2 bg-transparent text-white focus:outline-none'>
                <option value='' disabled selected className='bg-primary text-white'>Select</option>
                <option value='google' className='bg-primary text-white'>Google Search</option>
                <option value='facebook' className='bg-primary text-white'>Through a Friend</option>
                <option value='twitter' className='bg-primary text-white'>Through Developer</option>
                <option value='other' className='bg-primary text-white'>Other</option>
              </select>
            </div>
            <div className='flex justify-center'>
              <button className='bg-primary p-2 rounded-lg w-full text-white hover:text-accent'>Get a Call</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home