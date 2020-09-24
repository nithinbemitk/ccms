import React from 'react';
import './Coaching.css'
import { Button } from '@material-ui/core';

const CoachingHeader = (props) => {

    const showPlans = () => {
        props.displayPlan(true);
    }

    const showHideNewPlan = () => {
        if (!props.newPlan) {
            return <button className='RightSide' onClick={showPlans}>New Plan</button>
            //return <Button className='RightSide' variant="contained" color="primary" onClick={showPlans}>New Plan</Button>
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