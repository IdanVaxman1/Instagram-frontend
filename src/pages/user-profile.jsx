import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/post-service'
import { userService } from '../services/user-service'
import { PostProfile } from '../cmps/post-profile'
import {getUser , getUserPosts} from '../store/profile.actions'
import loading from '../assets/loading.gif'
import { useSelector, useDispatch } from 'react-redux'

export const UserProfile = () => {
    const user = useSelector((state) => state.profileModule.userData)
    const posts = useSelector((state) => state.profileModule.userPosts)
    const { userId } = useParams()
    const dispatch = useDispatch()


    
    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(getUserPosts(userId))
    }, [])
    

    

    if (!user || !posts) return <div className='loading'><img src={loading} alt="" /></div>

    return (
        <section>
            <section className='profile-header'>
                <div className='profile-user-img'>
                    <img src={user.userImg} alt="" />
                </div>
                <div className='profile-username'>
                    <span>{user.fullName}</span>
                </div>

                <section className='user-details'>
                    <div>{posts.length} posts</div> 
                    {/* <div>{user.followers.length} followers </div> */}
                     {/* <div>{user.following.length} following</div> */}
                </section>
            </section>

            <div>
                {posts.map(post => <PostProfile post={post} />)}
            </div>

        </section>

    )
}