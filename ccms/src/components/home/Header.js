import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import notificatioIcon from '../../images/NotificatioIcon.png';
import profileIcon from '../../images/profile.png';
import {Notifications, Person} from '@material-ui/icons/';

import { Menu, MenuItem } from '@material-ui/core';

const Header = (props) => {
    const [anchorEl, open] = React.useState(null);

    const handleClick = event => {
        open(event.currentTarget);
    };

    const handleClose = () => {
        open(null);
    };

    const navigationType = useSelector(state => {
        console.log("*** state is ", state)
        return state.navigation.title
    })

    const dispatch = useDispatch();

    const logoutClicked = () => {
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
                <Notifications />
            </div>
            <div className='HeaderProfile'>
                <Person onClick={handleClick}></Person>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose} >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={logoutClicked}>Logout</MenuItem>
            </Menu>

        </div>
    );
    
}

export default Header;
