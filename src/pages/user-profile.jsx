import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/post-service'
import { userService } from '../services/user-service'
import { PostProfile } from '../cmps/post-profile'
import { getUser, getUserPosts } from '../store/profile.actions'
import { following } from '../store/user.actions'
import loading from '../assets/loading.gif'
import { useSelector, useDispatch } from 'react-redux'

export const UserProfile = () => {

    const userProfile = useSelector((state) => state.profileModule.userData)
    const user = JSON.parse(localStorage.getItem('user'))
    const posts = useSelector((state) => state.profileModule.userPosts)
    const { userId } = useParams()
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(getUserPosts(userId))
    }, [userId])


    const onFollowing = () => {
        dispatch(following(userId, user.result._id))
    }

    console.log(userProfile);
    if (!userProfile || !posts) return <div className='loading'><img src={loading} alt="" /></div>
    console.log(userProfile.following.length);

    return (
        <section>
            <section className='profile-header'>
                <div className='profile-user-img'>
                    <img src={userProfile.userImg} alt="" />
                </div>
                <div className='profile-username'>
                    <span>{userProfile.fullName}</span>
                    {user.result._id !== userProfile._id && <button onClick={onFollowing}>Follow</button>}
                </div>

                <section className='user-details'>
                    <div>{posts.length} posts</div>
                    <div>{userProfile.followers.length} followers </div>
                    <div>{userProfile.following.length} following</div>
                </section>
            </section>

            <section className="post-profile-preview">
                {posts.map(post => <PostProfile post={post} />)}
            </section>

        </section>

    )
}
