import avatar from '../assets/avatar.svg'

export const DetailsComments = ({ comment }) => {
    return (
        <div className="ditails-comment">
            <div>
                <img src={avatar} alt="" />
            </div>
            <div>
                <span className="comment-fullname">{comment.by.fullname}</span>
                <span> {comment.txt}</span>
            </div>
        </div>
    )
}