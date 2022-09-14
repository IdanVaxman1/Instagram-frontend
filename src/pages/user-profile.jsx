import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postService } from '../services/post-service'
import { userService } from '../services/user-service'
import { PostProfile } from '../cmps/post-profile'
import loading from '../assets/loading.gif'

export const UserProfile = () => {

    const [posts, setPosts] = useState()
    const [user, setUser] = useState([])
    const { userId } = useParams()

    useEffect(() => {
        getPosts()
        getUser()
    }, [])


    const getUser = () => {
        userService.getById(userId)
            .then(user => setUser(user))
    }

    const getPosts = () => {
        postService.get(userId)
            .then(posts => setPosts([posts]))
    }

    console.log(posts);



    if (Array.isArray(user)) return <div className='loading'><img src={loading} alt="" /></div>

    return (
        <section>
            <section className='profile-header'>
                <div className='profile-user-img'>
                    <img src={user.imgUrl} alt="" />
                </div>
                <div className='profile-username'>
                    <span>{user.fullname}</span>
                </div>

                <section className='user-details'>
                    <div>{posts.length} posts</div>
                    <div>{user.followers.length} followers </div>
                    <div>{user.following.length} following</div>
                </section>
            </section>

            <div>
                {posts[0].map(post => <PostProfile post={post} />)}
            </div>

        </section>

    )
}