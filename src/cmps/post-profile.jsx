import { Link } from 'react-router-dom'
 

export const PostProfile = ({ post }) => {

    

    return (
        <section className="post-profile-preview">
            <Link to={`/p/${post._id}`}><div><img src={post.selectedImg} alt="" /></div></Link>
        </section>
    )


}