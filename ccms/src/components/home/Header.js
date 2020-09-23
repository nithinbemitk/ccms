import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import notificatioIcon from '../../images/NotificatioIcon.png';
import profileIcon from '../../images/profile.png';

const Header = (props) => {

    const navigationType = useSelector(state => {
        console.log("*** state is ", state)
        return state.navigation.title
    })

    const dispatch = useDispatch();

    const LogoutClicked = () => {
        console.log("Login Clicked");        
        dispatch({
            type: "SIGN_IN",
            payload: 1
        })
    }
    return (
        <div className='RightHeader'>
            <div className='HeaderText'>
                <h5>{navigationType}</h5>
            </div>
            <div className='HeaderNotification'>
                <img src={notificatioIcon} />
            </div>
            <div className='HeaderProfile'>
                <img onClick={LogoutClicked} src={profileIcon} />
            </div>
        </div>
    );
}

export default Header;
