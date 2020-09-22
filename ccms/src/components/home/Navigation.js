import React from 'react'
import { useSelector } from 'react-redux'
import Router from '../../Router'
import Header from './Header'

function Navigation() {

    const navigationType = useSelector(state => {
        console.log("*** state is ", state)
        return state.navigation.title
    })

    return (
        <div className='RightPanel'>
            <Header />
            <Router className='RightContent' path={navigationType} />
        </div>
    );
}

export default Navigation;