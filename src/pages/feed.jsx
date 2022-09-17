import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";

import loading from '../assets/loading.gif'
import { PostPreview } from '../cmps/post-preview'
import { loadPosts } from '../store/post.actions'
import { FeedStory } from '../cmps/feed-story'


export const Feed = () => {

    const posts = useSelector((state) => state.postModule.posts)
    const [user, setUser] = useState()

    const dispatch = useDispatch()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        dispatch(loadPosts())
    }, [])



    
    if (!Array.isArray(posts) || !posts.length) return <div className='loading'><img src={loading} alt="" /></div>
    if (!user) return <Navigate replace to="/login" />

    return (
        <section>
            <FeedStory />
            {posts.map(post => <PostPreview key={post._id} post={post} />)}
        </section>
    )
}

