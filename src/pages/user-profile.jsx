import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/post-service'
import { userService } from '../services/user-service'
import { PostProfile } from '../cmps/post-profile'
import { getUser, getUserPosts, loadPostsByIds } from '../store/profile.actions'
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
    }, [userId])


    const onFollowing = () => {
        dispatch(following(userId, user.result._id))
    }

    console.log(userProfile);
    if (!userProfile || !posts) return <div className='loading'><img src={loading} alt="" /></div>
    console.log(userProfile.following.length);

    return (
        <section className='profile-container'>
            <section className='profile-header'>
                <div className='profile-user-img'>
                    <img src={userProfile.userImg} alt="" />
                </div>
                <section className='profile-main'>
                    <div className='profile' >
                        <div className='profile-username'>
                            <span>{userProfile.fullName}</span>
                        </div>
                        <div className='message-btn'>
                            {user.result._id !== userProfile._id && <button>Message</button>}
                        </div>
                        <div className='follow-btn'>
                            {user.result._id !== userProfile._id && <button onClick={onFollowing}>Follow</button>}
                        </div>
                    </div>

                    <section className='user-details'>
                        <div><span className='profile-num'>{posts.length}</span> posts</div>
                        <div><span className='profile-num'>{userProfile.followers.length}</span> followers </div>
                        <div><span className='profile-num'>{userProfile.following.length}</span> following</div>
                    </section>

                    <div className='profile-bio'>
                        <span>{user.result.userBio}</span>
                    </div>

                </section>
            </section>

            <div className='tablist'>
                <div className='tablist-op'>
                    <div onClick={() => dispatch(getUserPosts(userId))}>POSTS</div>
                    <div onClick={() => dispatch(loadPostsByIds(userId))}>SAVED</div>
                    <div>TAGGED</div>
                </div>
            </div>
            <section className="post-profile-preview">
                {posts.map(post => <PostProfile post={post} />)}
            </section>

        </section>

    )
}
