import React from 'react';
import Login from './components/login/Login'
import Home from './components/home/Home'
import { useSelector } from 'react-redux'
import './App.css';

function App() {

  const isLogged = useSelector(state => {
    console.log("*** Login state is ", state.signIn.isLogged)
    return state.signIn.isLogged
})

  return (
    <div className="App">
      {isLogged ? <Home /> : <Login />}
    </div>
  );
}

export default App;
