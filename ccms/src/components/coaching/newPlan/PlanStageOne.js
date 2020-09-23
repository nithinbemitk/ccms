import React from 'react'
import { useHistory } from 'react-router-dom'
import '../Coaching.css'

const PlanStageOne = () => {
    const history = useHistory();

    const goToNext = () => {
        history.push('/stagetwo')
    }

    return (
        <div className="PlanContainer">
            <h1> Stage 1 </h1>
            <button onClick={goToNext}>Go To Stage 2</button>
        </div>

    );
}

export default PlanStageOne