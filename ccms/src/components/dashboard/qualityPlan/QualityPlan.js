// import React, { useEffect, useState } from 'react';
// import { getPosts } from '../../../service';


// function QualityPlan () {
//     const [posts, setPosts] = useState({ posts: [] })



//     return (
//         <div className="QualityPlan">
//             <h3>QualityPlan</h3>
//             {userPosts}
//         </div>
//     );
// }

// export default QualityPlan;


import React, { useEffect, useState } from 'react';
import { getPosts } from '../../../service';
import Plans from './Plans'
import './QualityPlan.css'

function QualityPlan() {
    const [posts, setPosts] = useState({ posts: [] })

    useEffect(() => {
        getPosts()
            .then((response) => {
                console.log("*** getPosts - ", response)
                setPosts({ posts: response.data })
            })
            .catch((error) => {
                console.log("*** getPosts error - ", error)
            })
    }, []);

    console.log("*** log Posts - ", posts)
    const userPosts = posts.posts.slice(0, 20).map((item) => {
        return <Plans key={item.id} plan={item} />
    })
    return (
        <div >
            <h3 style={{textAlign: "left"}}>QUALITY PLAN TO WORK ON</h3>
            { userPosts}
        </div>
    );
}

export default QualityPlan;

