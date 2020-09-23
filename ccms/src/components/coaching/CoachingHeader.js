import React from 'react';
import './Coaching.css'

const CoachingHeader = (props) => {

    const showPlans = () => {
        props.displayPlan(true);
    }

    const showHideNewPlan = () => {
        if (!props.newPlan) {
            return <button className='RightSide' onClick={showPlans}>New Plan</button>
        } else {
            return null
        }
    }
    return (
        <div className="CoachingRow">
            <h1 className="LeftSide"> Coaching Header </h1>

            {showHideNewPlan()}
        </div>
    );
}

export default CoachingHeader