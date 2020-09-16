import React from 'react';
import logo from '../../images/AppLogo.png'
import { navTitleValue } from '../../actions'

function SideBar() {


    const NavButtonClicked = () => {
        console.log("Navigation title value changed");

    }
    return (
        <div className='Parent'>
            <div className='LeftPanel'>
                <img src={logo} />
                <li onClick={NavButtonClicked}>DASHBOARD</li>
                <li onClick={NavButtonClicked}>COACHING</li>
            </div>
        </div>
    );
}

export default SideBar;
