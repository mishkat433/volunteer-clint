import React from 'react';
import Events from '../Events/Events';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import VolunteerCard from '../VolunteerCard/VolunteerCard';
import "./Home.css"

const Home = () => {
    return (
        <div className=" back-img">
            <div className="container">
                <Navbar></Navbar>
                <SearchBar></SearchBar>
                <VolunteerCard></VolunteerCard>
                <Events></Events>
            </div>
        </div>
    );
};

export default Home;