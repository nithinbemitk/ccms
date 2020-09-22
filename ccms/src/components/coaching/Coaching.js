import React, { useEffect, useState } from 'react';
import { getPosts } from '../../service'
import { Post } from './Post'
import { CoachingRow } from './Coaching.css'

function Coaching() {

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
        return <Post item={item} />
    })


    return (

        <div >
            <h3>Coaching</h3>
            <div className="CoachingRow">
                {userPosts}
            </div>
        </div>
    );
}

export default Coaching;
