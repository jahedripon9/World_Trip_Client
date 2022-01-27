
import React from 'react';
import {useNavigate,  useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import HeroSections from '../../Hero Sections/HeroSections'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const redirect_uri = location.state?.from || '/deliveryinfo'
    
    const handleGoogleLogin = () => {
        signInUsingGoogle()
          .then (result => {
            history.push(redirect_uri);
          })
      }


    return (
        <div className='bg-gray-500'> 
            <HeroSections></HeroSections>
           <div className="container mx-auto">
           <section className="text-gray-600 body-font bg-blue-100 ">
                <div className="container  flex px-5 py-24 md:flex-row flex-col items-center ">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-10">
                    <img className="object-cover object-center rounded " alt="hero" src="https://images.pexels.com/photos/3932932/pexels-photo-3932932.jpeg?cs=srgb&dl=pexels-tatiana-syrikova-3932932.jpg&fm=jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className=" title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold">Let’s Make Your World Trip</h1>
                    
                    <div className="">
                    
                        <button onClick={handleGoogleLogin} className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg" > <span><img className='w-8 bg-white mr-6 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Sign In with Google</button>
                    </div>
                    
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default Login;