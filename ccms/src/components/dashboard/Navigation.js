import React from 'react'
import notificatioIcon from '../../images/NotificatioIcon.png'
import profileIcon from '../../images/profile.png'
import { useSelector } from 'react-redux'

function Navigation() {

    const navigationType = useSelector(state => {
        console.log("*** state is ", state)
        return state.navigation.title
    })

    return (
        <div className='RightPanel'>
            <div className='RightHeader'>
                <div className='HeaderText'>
                    <h5>{navigationType}</h5>
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