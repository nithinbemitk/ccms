import React from 'react';
import { useDispatch } from 'react-redux'
import { loggedIn } from '../../actions'
import Navigation from './Navigation';
import SideBar from './SideBar';
import { Parent, LeftPanel, RightPanel } from '../../App.css'


function Home() {

    const dispatch = useDispatch();

    const LogoutClicekd = () => {
        dispatch(loggedIn())
    }

    return (
        <div className={Parent}>
            <div className={LeftPanel}>
                <SideBar />
            </div>
            <div className={RightPanel}>
                <Navigation />
            </div>
            {/* <button onClick={LogoutClicekd}>Logout</button> */}
        </div>
    );
}

export default Home;
