import React from 'react';
import Banner from '../Hero Sections/Banner';
import HeroSection from '../Hero Sections/HeroSections';
import TravelAnyCorner from '../Hero Sections/TravelAnyCorner';
import SpecialUpcommingOffers from '../SpecialUpcomingOffers/SpecialUpcomingOffers';
import RecommendedDestination from '../SpecialUpcomingOffers/RecommendedDestination';
import Testimonials from '../SpecialUpcomingOffers/Testimonials';
import RegisterToday from '../RegisterToday/RegisterToday';
import Footer from '../Hero Sections/Footer';
// import Login from '../Login/Login/Login';


const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Banner></Banner>
            <SpecialUpcommingOffers></SpecialUpcommingOffers>
            <TravelAnyCorner></TravelAnyCorner>
            <RecommendedDestination></RecommendedDestination>
            <Testimonials></Testimonials>
            <RegisterToday></RegisterToday>
            <Footer></Footer>
            {/* <Login></Login> */}


        </div>
    );
};

export default Home;