import React from 'react'
import notificatioIcon from '../../images/NotificatioIcon.png'
import profileIcon from '../../images/profile.png'

function Navigation() {

    return (
        <div className='RightPanel'>
            <div className='RightHeader'>
                <div className='HeaderText'>
                    <h5>Dashbard</h5>
                </div>
                <div className='HeaderNotification'>
                    <img src={notificatioIcon} />
                </div>
                <div className='HeaderProfile'>
                    <img src={profileIcon} />
                </div>
            </div>
        </div>
    );
}

export default Navigation;