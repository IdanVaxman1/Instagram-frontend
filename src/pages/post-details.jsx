import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { loadPost } from '../store/post.actions'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import loading from '../assets/loading.gif'
import { DetailsComments } from '../cmps/details-comment'


export const PostDetails = () => {

    const post = useSelector((state) => state.postModule.posts)
    const dispatch = useDispatch()
    const { postId } = useParams()


    useEffect(() => {
        dispatch(loadPost(postId))
    }, [])


    if (!post.txt) return <div className='loading'><img src={loading} alt="" /></div>

    return (
        <section className='post-details'>
            <div className='details-container'>
                <div className='details-img'>
                    <img src={post.selectedImg} alt="" />
                </div>

                <div className='details-user'>
                    <div>
                        <img src={post.by.imgUrl} alt="" />
                    </div>
                    <div className='details-fullname'>
                        <Link to={`/profile/${post.by._id}`}><span>{post.by.fullname}</span></Link>
                    </div>
                </div>
                <div>
                    {/* {post.comments.map(comment => <DetailsComments comment={comment} />)} */}
                </div>
            </div>
        </section>
    )

}