import React from 'react';
import Login from './components/login/Login'
import Home from './components/dashboard/Home'
import { useSelector, useDispatch } from 'react-redux'
import { loggedIn } from './actions'


// import logo from '../src/Images/AppLogo.png'


import './App.css';

function App() {

  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const ChangeLoginValue = () => {
    dispatch(loggedIn())
  }

  return (
    <div className="App">
      {/* <button onClick={ChangeLoginValue}>Toggle</button> */}

      {isLogged ? <Home /> : <Login />}

    </div>
  );
}

export default App;
