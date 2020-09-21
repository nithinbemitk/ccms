import React, { useEffect } from 'react';
import { getPosts } from '../../service'

function Coaching() {

    useEffect(() => {
        getPosts()
            .then((respone) => {
                console.log("*** getPosts - ", respone)
            })
            .catch((error) => {
                console.log("*** getPosts error - ", error)
            })
    });

    return (
        <div >
            <h3>Coaching</h3>
        </div>
    );
}

export default Coaching;
