import { Link } from 'react-router-dom'


export const PostProfile = ({ post }) => {



    return (
      
            <div>
                <Link to={`/p/${post._id}`}><div><img src={post.selectedImg} alt="" /></div></Link>
            </div>
    )


}