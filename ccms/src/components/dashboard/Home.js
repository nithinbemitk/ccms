import React from 'react';
import { useDispatch } from 'react-redux'
import { loggedIn } from '../../actions'
import Navigation from './Navigation';
import SideBar from './SideBar'
    

function Home() {

    const dispatch = useDispatch();

    const LogoutClicekd = () => {
        dispatch(loggedIn())
    }

    return (
        <div>
            <div className="SideBarLeftCss">
                <SideBar></SideBar>
            </div>
            <div>
                <Navigation name="Dashboard" />
            </div>
            {/* <button onClick={LogoutClicekd}>Logout</button> */}
        </div>
    );
}

export default Home;
