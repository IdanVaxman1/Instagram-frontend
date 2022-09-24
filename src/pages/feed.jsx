import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";

import loading from '../assets/loading.gif'
import { PostPreview } from '../cmps/post-preview'
import { loadPosts } from '../store/post.actions'
import { FeedStory } from '../cmps/feed-story'


export const Feed = () => {

    const posts = useSelector((state) => state.postModule.posts)
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [])




    if (!user) return <Navigate replace to="/login" />
    if (!Array.isArray(posts) || !posts.length) return <div className='loading'><img src={loading} alt="" /></div>
    
    return (
        <section>
            <FeedStory />
            {posts.map(post => <PostPreview key={post._id} post={post} />)}
        </section>
    )
}

