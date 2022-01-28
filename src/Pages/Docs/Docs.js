import React from 'react';
import HeroSection from '../Hero Sections/HeroSections'

const Docs = () => {
    return (
        <div>
            <div className='bg-gray-300'>
                <HeroSection></HeroSection>
            </div>
            <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg?cs=srgb&dl=pexels-catarina-sousa-68704.jpg&fm=jpg"/>
                <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What does a travel guide do?</h1>
                <p class="mb-8 leading-relaxed">Travel guides plan, sell, and arrange tours for groups or individuals that are normally at long distances from their customer's homes. These guides organize full itineraries to include recreational activities and events and provide that information to their customers.</p>
                
                </div>
            </div>
        </section>
        </div>
    );
};

export default Docs;