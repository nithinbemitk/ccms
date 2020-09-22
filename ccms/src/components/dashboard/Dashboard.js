import React, { useEffect } from 'react';
import { getUsers } from '../../service';

function Dashboard() {

    useEffect(() => {
        getUsers()
            .then(function (response) {
                console.log("*** getUsers - ", response);
            })
            .catch(function (error) {
                console.log("*** getUsers error - ", error);
            })

    }, []);

    return (
        <div >
            <h3>Dashboard</h3>
        </div>
    );
}

export default Dashboard;
