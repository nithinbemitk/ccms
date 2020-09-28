import React from 'react';
import './Coaching.css'
import Radium from 'radium'
import { Button } from '@material-ui/core';

const CoachingHeader = (props) => {

    const showPlans = () => {
        props.displayPlan(true);
    }

    const rightSide = {
        justifyContent: "right",
        alignItems: "center",
        marginLeft: "auto",
        height: "40px",
        marginTop: "20px",
        marginRight: "20px",
        backgroundColor: "aqua",
        ":hover": {
            backgroundColor: "blue",
            color: "white"
        }


}

const showHideNewPlan = () => {
    if (!props.newPlan) {
        return <button style={rightSide} onClick={showPlans}>New Plan</button>
        //return <Button className='RightSide' variant="contained" color="primary" onClick={showPlans}>New Plan</Button>
    } else {
        return null
    }
}
return (
    <div className="CoachingHeader">
        <h1 className="LeftSide"> Coaching Header </h1>

        {showHideNewPlan()}
    </div>
);
}

export default Radium(CoachingHeader);