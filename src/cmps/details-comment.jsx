import avatar from '../assets/avatar.svg'

export const DetailsComments = ({ comment }) => {
    return (
        <div className="ditails-comment">
            <div>
                <img src={comment.userImg} alt="" />
            </div>
            <div>
                <span className="comment-fullname">{comment.fullName}</span>
                <span> {comment.txt}</span>
            </div>
        </div>
    )
}