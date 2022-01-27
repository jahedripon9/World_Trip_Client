import React from 'react';
import Banner from '../Hero Sections/Banner';
import HeroSection from '../Hero Sections/HeroSections';
import TravelAnyCorner from '../Hero Sections/TravelAnyCorner';
import SpecialUpcommingOffers from '../SpecialUpcomingOffers/SpecialUpcomingOffers';
import RecommendedDestination from '../SpecialUpcomingOffers/RecommendedDestination';
import Testimonials from '../SpecialUpcomingOffers/Testimonials';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Banner></Banner>
            <SpecialUpcommingOffers></SpecialUpcommingOffers>
            <TravelAnyCorner></TravelAnyCorner>
            <RecommendedDestination></RecommendedDestination>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;