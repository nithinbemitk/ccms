import React, { useEffect, useState } from 'react';
import { getPosts } from '../../service';
import './Coaching.css';
import CoachingHeader from './CoachingHeader';
import NewPlan from './newPlan/NewPlan';
import { Post } from './Post';

function Coaching() {

    const [posts, setPosts] = useState({ posts: [] })
    const [newPlan, setNewPlan] = useState(false)

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

    const displayContent = () => {
        if (newPlan) {
            return <NewPlan />
        } else {
            return (<div className="CoachingRow">
                {userPosts}
            </div>)
        }
    }

    return (

        <div >
            <CoachingHeader />
            {
                displayContent()
            }
        </div>
    );
}

export default Coaching;
