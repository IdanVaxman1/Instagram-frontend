import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import heart from '../assets/heart.png'
import likeheart from '../assets/likeheart.png'
import chat from '../assets/chat.png'
import send from '../assets/send.png'
import moment from 'moment/moment';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import { PostModal } from './post-modal'
import { likePost, commentPost } from '../store/post.actions';
import { savePost } from '../store/user.actions'

export const PostPreview = ({ post }) => {

    const navigate = useNavigate()

    let nextState = { additionalInformation: 'Updated url' }
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))

    const [commentData, setcommentData] = useState()
    const [postSaved, setpostSaved] = useState(false)


    const onGoToDetails = () => {
        navigate(`/p/${post._id}`)
    }

    const onGoToProfile = () => {
        navigate(`/profile/${post.creator}`)
    }

    const handleChange = (ev) => {
        if (ev.target.value) {
            setcommentData({ userImg: user.result.userImg, fullName: user.result.fullName, txt: ev.target.value })
        }
        else setcommentData()
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        dispatch(commentPost(post._id, commentData))
    }

    const onSavePost = () => {
        dispatch(savePost(user.result._id, post._id))
        setpostSaved(true)
    }


    // (!post) && <h3>loading..</h3>
    return (
        <section className="post-preview">
            <div className="post-header">
                <img src={user.result.userImg} alt="" />
                <div onClick={onGoToProfile} className="post-name-header">
                    <h4>{post.name}</h4>
                </div>
                <div className='post-more'>
                    <PostModal post={post} />
                </div>
            </div>
            <div className="post-img">
                <img src={post.selectedImg} alt="" />
            </div>
            <div className='post-icons'>
                <img src={post.likes.find((like) => like === user.result._id) ? likeheart : heart}
                    alt="" onClick={() => dispatch(likePost(post._id, post))} />
                <img src={chat} alt="" />
                <img src={send} alt="" />
                {user.result.SavedPosts.find((postId) => postId === post._id) || postSaved ? <BookmarkIcon /> : <BookmarkBorderIcon onClick={onSavePost} />}

            </div>
            <div className='post-like'>
                <span>{post.likes.length} likes</span>
            </div>
            <div className='post-txt'>
                <span className='post-txt-name'>{post.name}</span>
                <span>{post.txt}</span>
            </div>


            <div className='post-comments' onClick={onGoToDetails}>
                <span>{`View all ${post.comments.length} comments`}</span>
                {/* <PostDetails post={post} simbol={'...'}/> */}
            </div>

            <div className='post-date'>
                <span>{moment.utc(post.createdAt).local().startOf('seconds').fromNow()}</span>
            </div>

            <div className='post-comment'>
                <div><textarea onChange={handleChange} placeholder='Add a comment...' cols="55" rows="1"></textarea></div>
                <div><button onClick={handleSubmit} disabled={!commentData}>Post</button></div>
            </div>

        </section >
    )
}