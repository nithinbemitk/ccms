import React from 'react';
import logo from '../../images/AppLogo.png'
import { useDispatch } from 'react-redux'
import { setNavigation, ACTION_TYPE_DASHBOARD, ACTION_TYPE_COACHING } from '../../redux/actions'
import profileIcon from '../../images/profile.png'

function SideBar() {

    const dispatch = useDispatch();

    const onDashboardClicked = () => {
        console.log("Dashboard clicked");
        dispatch(setNavigation(ACTION_TYPE_DASHBOARD));
    }

    const onCoachingClicked = () => {
        console.log("Coaching clicked");
        dispatch(setNavigation(ACTION_TYPE_COACHING));
    }

    return (
        <div className='LeftPanel'>
            <img src={logo} />
            <li className="ListSpace" onClick={onDashboardClicked}><img src={profileIcon}></img>{' '}DASHBOARD</li>
            <li className="ListSpace" onClick={onCoachingClicked}><img src={profileIcon}></img>{' '}COACHING</li>
        </div>
    );
}

export default SideBar;
