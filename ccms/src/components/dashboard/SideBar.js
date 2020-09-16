import React from 'react';
import logo from '../../images/AppLogo.png'
import { useDispatch } from 'react-redux'
import { setNavigation } from '../../actions'
import { ACTION_TYPE_DASHBOARD, ACTION_TYPE_COACHING } from '../../actions'

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
        <div className='Parent'>
            <div className='LeftPanel'>
                <img src={logo} />
                <li onClick={onDashboardClicked}>DASHBOARD</li>
                <li onClick={onCoachingClicked}>COACHING</li>
            </div>
        </div>
    );
}

export default SideBar;
