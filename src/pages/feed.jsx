import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { PostPreview } from '../cmps/post-preview'
import { loadPosts } from '../store/post.actions'
import { FeedStory } from '../cmps/feed-story'
import loading from '../assets/loading.gif'
import axios from 'axios'

export const Feed = () => {

    const posts = useSelector((state) => state.postModule.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
        console.log('from back : ',posts);
    }, [])



    if (!Array.isArray(posts) || !posts.length) return <div className='loading'><img src={loading} alt="" /></div>
    


    return (
        <section>
            <FeedStory />
            {posts.map(post => <PostPreview key={post._id} post={post} />)}
        </section>
    )
}

