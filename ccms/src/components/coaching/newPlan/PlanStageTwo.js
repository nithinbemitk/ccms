import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Coaching.css'

const PlanStageTwo = () => {
    const history = useHistory();

    const goToNext = () => {
        history.push('/stagethree')
    }

    return (
        <div className="PlanContainer">
            <h1> Stage 2 </h1>
            <button onClick={goToNext}>Go To Stage 3</button>
        </div>

    );
}

export default PlanStageTwo