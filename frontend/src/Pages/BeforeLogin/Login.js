import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Toaster, toast } from 'react-hot-toast';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OtpInput from 'react-otp-input';
import { Context } from '../../Context/ContextProvider';
import { auth } from '../../AuthFolder/firebase.config';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Image from '../../Images/LoginImage.png';

const Login = () => {
  const { login } = useContext(Context);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [ph, setPh] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleVerifyClick = () => {
    onSignup();
  };

  async function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // onSignup();
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
        }
      }, auth);
    }
  }

  async function onSignup() {
    await onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPh = '+' + ph;

    await signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOtpInput(true);
        toast.success('OTP sent successfully!');
      }).catch((error) => {
        console.log(error);
        toast.error('Failed to send OTP');
      });
  }

  function onOtpVerify() {
    window.confirmationResult.confirm(otp).then(async (res) => {
      setUser(res.user);
      toast.success('Login successful!');
      setTimeout(() => navigate('/HomeLog'), 3000);
    })
      .catch(err => {
        console.log(err);
        toast.error('Failed to verify OTP');
      });
  }

  return (
    <>
      <Navbar />
      {/* Mobiles and Tablets */}
      <div className='xl:hidden'>
        <div id='body' className='bg-slate-200 min-h-screen flex items-center justify-center sm:p-4'>
          <section className='min-h-screen flex items-center justify-center py-2 sm:p-10'>
            <div className='flex flex-col rounded-2xl shadow-lg max-w-full w-full bg-primary py-4 sm:px-6 items-center'>
              <Toaster toastOptions={{ duration: 4000 }} />
              <div id="recaptcha-container"></div>
              {user ? (
                <h2 className='text-center text-white text-2xl'>Login successful</h2>
              ) : (
                <div className='w-full px-2 text-white'>
                  <h2 className='font-bold text-2xl mb-2'>Login</h2>
                  <p className='text-sm mb-4'>If you are already a member, easily log in</p>
                  <form className='flex flex-col gap-4'>
                    <input className="p-2 rounded-xl border w-full text-primary focus:outline-none" type="text" placeholder='Name' name="userName"></input>
                    <div className='flex flex-col sm:flex-row items-center gap-2'>
                      <PhoneInput country={"in"} value={ph} onChange={setPh} className="rounded-xl border w-full sm:w-3/4 text-primary border-none" type='tel' placeholder='Phone number' name='phoneNumber'>
                      </PhoneInput>
                      <button type='button' onClick={handleVerifyClick} className='w-full sm:w-1/4 rounded-xl border p-2 text-white bg-secondary hover:bg-accent duration-300'>
                        Verify
                      </button>
                    </div>
                    {showOtpInput && (
                      <div id='otp' className='flex flex-col gap-2'>
                        <OtpInput className="p-2 rounded-xl border w-full flex justify-between gap-2" OTPLength={6} otpType="number" value={otp} onChange={setOtp} disabled={false} autoFocus>
                        </OtpInput>
                        <button type='button' onClick={onOtpVerify} className='w-full rounded-xl border p-2 text-white bg-secondary hover:bg-accent duration-300'>
                          Login
                        </button>
                      </div>
                    )}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-2'>
                      <p className='text-xs'>Don't have an account?</p>
                      <Link to='/Register' className='w-full sm:w-1/4 rounded-xl border p-2 text-center text-white bg-secondary hover:bg-accent duration-300'>
                        Register
                      </Link>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Laptops */}
      <div className='hidden xl:block'>
        <div id='body' className='bg-slate'>
          <section className='bg-darkColor min-h-screen flex items-center justify-center'>
            <div className='bg-customColor flex flex-col md:flex-row rounded-2xl shadow-lg max-w-3xl p-5 items-center bg-primary'>
              <div>
                <Toaster toastOptions={{ duration: 4000 }} />
                <div id="recaptcha-container"></div>
                {user ? (
                  <h2 className='text-center text-white text-2xl'>Login successful</h2>
                ) : (
                  <div className='md:w-full px-6 text-white'>
                    <h2 className='font-bold text-xl'>Login</h2>
                    <p className='text-xs mt-4'>If you are already a member, easily log in</p>
                    <form className='flex flex-col gap-3'>
                      <div className='pr-4'>
                        <input className="p-2 mt-8 rounded-xl border w-full focus:outline-none" type="text" placeholder='Name' name="userName"></input>
                      </div>
                      <div className='flex pr-4 items-center justify-center'>
                        <PhoneInput country={"in"} value={ph} onChange={setPh} className=" mt-4 rounded-xl border w-3/4 mr-1 border-none" type='tel' placeholder='Phone number' name='phoneNumber'></PhoneInput>
                        <button type='button' onClick={handleVerifyClick} className='bg-darkColor w-1/4 rounded-xl border ml-1 p-2 mt-4 text-white hover:text-accent duration-300'>
                          Verify
                        </button>
                      </div>
                      {showOtpInput && (
                        <div id='otp' className='pr-4'>
                          <OtpInput className="p-2 mt-8 rounded-xl border w-full flex justify-between gap-2" OTPLength={6} otpType="number" value={otp} onChange={setOtp} disabled={false} autoFocus></OtpInput>
                          <button type='button' onClick={onOtpVerify} className=' bg-darkColor w-full rounded-xl border p-2 mt-4 text-white hover:text-accent duration-300'>
                            Login
                          </button>
                        </div>
                      )}
                      <hr className='border-gray-400'></hr>
                      <div className='flex flex-col md:flex-row items-center justify-center space-between'>
                        <p className='text-xs mr-2'>If you don't have an account?</p>
                        <Link to='/Register' className='bg-darkColor w-full md:w-1/4 rounded-xl border p-2 mt-2 md:mt-0 text-white hover:text-accent duration-300 text-center'>
                          Register
                        </Link>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              <div className='w-full md:w-1/2 md:block hidden'>
                <img src={Image} className='rounded-2xl' alt="Login Background"></img>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
