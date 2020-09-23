import React, { useState } from 'react';
import Calendar from './Calendar'
import QualityPlan from './QualityPlan'
import StatusList from './StatusList'
import { useSelector } from 'react-redux'

function Dashboard() {
    const [role, SetRole] = useState(1)

    const roleType = useSelector(state => {
        console.log("*** Role state is ", state.signIn.role)
        return state.signIn.role
    })

    const displayByRole = () => {
        switch (role) {
            case 1 :
                return <div><Calendar /> <QualityPlan /><StatusList /></div> 
            case 2 :
                return <div> <QualityPlan /> <Calendar /> <StatusList /></div>
            case 3 :
                return <div><StatusList /><Calendar /> <QualityPlan /></div>
            default:
                return <Calendar />
        }
    }

    return (
        <div >
            {displayByRole()}
        </div>
    );
}

export default Dashboard;
