import React from 'react';
import logo from '../../images/AppLogo.png'
import { useDispatch } from 'react-redux'
import { setNavigation, ACTION_TYPE_DASHBOARD, ACTION_TYPE_COACHING } from '../../redux/actions'
import profileIcon from '../../images/profile.png'
import {Dashboard, CastForEducation} from '@material-ui/icons/';

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
            <img src={logo} width='50%' />
            <li className="ListSpace" onClick={onDashboardClicked}><Dashboard />{' '}DASHBOARD</li>
            <li className="ListSpace" onClick={onCoachingClicked}><CastForEducation />{' '}COACHING   </li>
        </div>
    );
}

export default SideBar;
