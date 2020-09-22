import React from 'react'
import {CoachingCol} from './Coaching.css'

export const Post = (props) => {

    return (
        <div className='CoachingCol'>
            <h5>{props.item.id}</h5>
            <h3>{String(props.item.title).substring(0, 20)}</h3>
        </div>
    );
}