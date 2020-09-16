import React from 'react';
import notificatioIcon from '../src/Images/NotificatioIcon.png'
import profileIcon from '../src/Images/profile.png'
import logo from '../src/Images/AppLogo.png'

import './App.css';

function App() {
  return (
    <div className='Parent'>
      <div className='LeftPanel'>
        <h4>Nav Items</h4>
        <li>Item 1</li>
        <li>Item 2</li>
      </div>

      <div className='RightPanel'>
        <div className='RightHeader'>
          <div className='HeaderText'>
            <h5>Dashboard</h5>
          </div>
          <div className='HeaderNotification'>
            <img src={notificatioIcon} />
          </div>
          <div className='HeaderProfile'>
          <img src={profileIcon} />
          </div>

        </div>
        <div className='RightContent'>
          <h1>content</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
