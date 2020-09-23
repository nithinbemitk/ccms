import React from 'react';
import Calendar from './Calendar'
import QualityPlan from './QualityPlan'
import StatusList from './StatusList'
import { useSelector } from 'react-redux'
import './Dashboard.css'


function Dashboard() {

    const roleType = useSelector(state => {
        console.log("*** Role state is ", state.signIn.role)
        return state.signIn.role
    })

    const displayByRole = () => {
        switch (roleType) {
            case 1:
                return <div>
                    <Calendar />
                    <QualityPlan />
                    <StatusList />
                </div>
            case 2:
                return <div>
                    <QualityPlan />
                    <Calendar />
                    <StatusList />
                </div>
            case 3:
                return <div >
                    <div className="DashboardCss">
                        <div className="StatusListCss">
                            <StatusList />
                        </div>
                        <div className="QualityPlanCss">
                            <QualityPlan />
                        </div>
                    </div>
                    <div className="CalendarCss">
                        <Calendar />
                    </div>
                </div>
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
