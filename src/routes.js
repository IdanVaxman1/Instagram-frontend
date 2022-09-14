import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { UserProfile } from './pages/user-profile'
import { PostDetails } from './pages/post-details'




export const routes = [
    {
        path: '/login',
        component: <Login />,
    },
    {
        path: '/profile/:userId',
        component: <UserProfile />,
    },
    {
        path: '/p/:postId',
        component: <PostDetails />,
    },
    {
        path: '/',
        component: <Feed />,
    },
]

// export default routes

