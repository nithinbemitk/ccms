import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Coaching.css'

const PlanStageThree = () => {
    const history = useHistory();

    const goToNext = () => {
        history.push('/stagefour')
    }

    return (
        <div className="PlanContainer">
            <h1> Stage 3</h1>
            <button onClick={goToNext}>Go To Final Stage</button>
        </div>

    );
}

export default PlanStageThree