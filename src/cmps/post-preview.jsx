import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import heart from '../assets/heart.png'
import chat from '../assets/chat.png'
import send from '../assets/send.png'


import { PostModal } from './post-modal'
import { likePost } from '../store/post.actions';

export const PostPreview = ({ post }) => {

    const navigate = useNavigate()

    let nextState = { additionalInformation: 'Updated url' }
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('user'))

    const onGoToDetails = () => {
        window.history.replaceState(nextState, '', `${post._id}`)
    }

    const onGoToProfile = () => {
        navigate(`/profile/${post.creator}`)
    }



    // (!post) && <h3>loading..</h3>
    return (
        <section className="post-preview">
            <div className="post-header">
                <img src={user.result.userImg} alt="" />
                    <div onClick={onGoToProfile} className="post-name-header">
                        <h4>{post.name}</h4>
                    </div>
                <PostModal post={post} />
            </div>
            <div className="post-img">
                <img src={post.selectedImg} alt="" />
            </div>
            <div className='post-icons'>
                <img src={heart} alt="" onClick={() => dispatch(likePost(post._id, post))} />
                <img src={send} alt="" />
                <img src={chat} alt="" />
            </div>
            <div className='post-like'>
                <span>{post.likes.length} likes</span>
            </div>
            <div className='post-txt'>
                <span className='post-txt-name'>{post.name}</span>
                <span>{post.txt}</span>
            </div>

            <div className='post-comments' onClick={onGoToDetails}>
                {/* <PostDetails post={post} simbol={'...'}/> */}
            </div>
        </section>
    )
}