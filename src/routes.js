import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { UserProfile } from './pages/user-profile'
import { PostDetails } from './pages/post-details'
import { AppHeader } from './cmps/app-header'
import { Setting } from './pages/setting'




export const routes = [
    {
        path: '/login',
        component: <Login />,
    },
    {
        path: '/setting',
        component: <Setting />,
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

