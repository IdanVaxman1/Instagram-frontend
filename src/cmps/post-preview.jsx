import { Link } from 'react-router-dom'
// import { PostDetails } from '../pages/post-details'
import { useNavigate } from "react-router-dom";
import heart from '../assets/heart.png'
import chat from '../assets/chat.png'
import send from '../assets/send.png'

import { PostModal } from './post-modal'

export const PostPreview = ({ post }) => {

    let nextState = {additionalInformation : 'Updated url'}


    const onGoToDetails = () => {
        window.history.replaceState(nextState , '' , `${post._id}`)
    }

    // (!post) && <h3>loading..</h3>

    return (
        <section className="post-preview">
            <div className="post-header">
                <img src={post.by.imgUrl} alt="" />
                <Link to={`/profile/${post.by._id}`}>
                    <div className="post-name-header">
                        <h4>{post.by.fullname}</h4>
                    </div>
                </Link>
                <PostModal post={post} />
            </div>
            <div className="post-img">
                <img src={post.imgUrl} alt="" />
            </div>
            <div className='post-icons'>
                <img src={heart} alt="" />
                <img src={send} alt="" />
                <img src={chat} alt="" />
            </div>
            <div className='post-like'>
                {/* <span>{post.likedBy.length} likes</span> */}
            </div>
            <div className='post-txt'>
                <span className='post-txt-name'>{post.by.fullname}</span>
                <span>{post.txt}</span>
            </div>

            <div className='post-comments' onClick={onGoToDetails}>
                {/* <PostDetails post={post} simbol={'...'}/> */}
            </div>
        </section>
    )
}