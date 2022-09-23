import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { loadPost, commentPost } from '../store/post.actions'
import { getUserPosts } from '../store/profile.actions'
import { useEffect, useState } from 'react';
import loading from '../assets/loading.gif'

import { DetailsComments } from '../cmps/details-comment'
import Input from '../cmps/input';


export const PostDetails = () => {

    const post = useSelector((state) => state.postModule.posts)
    const posts = useSelector((state) => state.profileModule.userPosts)
    const dispatch = useDispatch()
    const { postId } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))

    const [commentData, setcommentData] = useState(post.comments)


    useEffect(() => {
        dispatch(loadPost(postId))
    }, [])


    const handleChange = (ev) => {
        setcommentData({ userImg: user.result.userImg, fullName: user.result.fullName, txt: ev.target.value })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        dispatch(commentPost(post._id, commentData))
    }

    if (!post) return <div className='loading'><img src={loading} alt="" /></div>

    return (
        <section className='post-details'>
            <div className='details-container'>
                <div className='details-img'>
                    <img src={post.selectedImg} alt="" />
                </div>

                <div className='details-user'>
                    <div>
                        <img src={post.selectedImg} alt="" />
                    </div>
                    <div className='details-fullname'>
                        <Link to={`/profile/${post.creator}`}><span>{post.name}</span></Link>
                    </div>
                </div>
                <div>

                    {post.comments && post.comments.map(comment => <DetailsComments comment={comment} />)}
                </div>
                <form onSubmit={handleSubmit}>
                    <Input type={'text'} handleChange={handleChange} name={'comment'} />
                    <button>Post</button>
                </form>
            </div>


            <section>

            </section>


        </section>



    )

}