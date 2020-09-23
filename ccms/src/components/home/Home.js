import React from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';

function Home() {

    return (
        <div className="MainDashboard">
            <SideBar />
            <Navigation />
        </div>
    );
}

export default Home;
