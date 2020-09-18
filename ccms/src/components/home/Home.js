import React from 'react';
import { useDispatch } from 'react-redux'
import { loggedIn } from '../../redux/actions'
import Navigation from './Navigation';
import SideBar from './SideBar';
import { Parent, LeftPanel, RightPanel } from '../../App.css'


function Home() {

    const dispatch = useDispatch();

    const LogoutClicekd = () => {
        dispatch(loggedIn())
    }

    return (
        <div className="MainDashboard">
                <SideBar />
                <Navigation />
            {/* <button onClick={LogoutClicekd}>Logout</button> */}
        </div>
    );
}

export default Home;
