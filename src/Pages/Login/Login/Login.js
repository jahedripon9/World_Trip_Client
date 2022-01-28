import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeroSection from '../../Hero Sections/HeroSections'



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, userLogin, authError,signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useNavigate();
    const redirect_uri = location?.state?.from || '/home'


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        userLogin(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleGoogleLogin = () => {
        signInUsingGoogle()
          .then (result => {
            history.push(redirect_uri);
          })
      }
    return (
        <div>
            <div className="container">
            <div className='bg-gray-300'>
                <HeroSection></HeroSection>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
                <div className="lg:max-w-lg lg:ml-36 lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/21014/pexels-photo.jpg?cs=srgb&dl=pexels-mihis-alex-21014.jpg&fm=jpg"/>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">LOG IN</h2>
                    <form  onSubmit={handleLoginSubmit}>
                    <div className="relative mb-4">
                        <label htmlFor="email" type="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" onBlur={handleOnBlur}  name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" type="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" onBlur={handleOnBlur}  name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                    {user?.email && <p severity="success">Login successfully!</p>}
                        {authError && <p severity="error">{authError}</p>}
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Login</button>
                        <button onClick={handleGoogleLogin} className="ml-auto inline-flex  font-bold text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg" > <span><img className='w-8 bg-white mr-6 rounded-md' src="https://i.ibb.co/w7HtJyq/google.png" alt="" /></span> Sign In with Google</button>
                    </form>
                    
                    <Link to='/register'><button className="text-lg text-gray-500 mt-3">Create Your World Trip Account</button></Link>
                    </div>
                </div>
            </section>
            </div>
  
        </div>
    );
};

export default Login;