import React from 'react';
import Banner from '../Hero Sections/Banner';
import HeroSection from '../Hero Sections/HeroSections';
import TravelAnyCorner from '../Hero Sections/TravelAnyCorner';
import SpecialUpcommingOffers from '../SpecialUpcomingOffers/SpecialUpcomingOffers';
import RecommendedDestination from '../SpecialUpcomingOffers/RecommendedDestination';
import Testimonials from '../SpecialUpcomingOffers/Testimonials';
import RegisterToday from '../RegisterToday/RegisterToday';
import Footer from '../Hero Sections/Footer';
import Booking from '../BookingNow/Booking/Booking';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Banner></Banner>
            <SpecialUpcommingOffers></SpecialUpcommingOffers>
            <TravelAnyCorner></TravelAnyCorner>
            <RecommendedDestination></RecommendedDestination>
            <Booking></Booking>
            <Testimonials></Testimonials>
            <RegisterToday></RegisterToday>
            <Footer></Footer>

        </div>
    );
};

export default Home;