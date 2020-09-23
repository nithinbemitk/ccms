import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Coaching.css'

const PlanStageFour = () => {
    const history = useHistory();

    const goToNext = () => {
        history.replace('/coaching')
        
    }

    return (
        <div className="PlanContainer">
            <h1> Final Stage </h1>
            <button onClick={goToNext}>Completed</button>
        </div>

    );
}

export default PlanStageFour