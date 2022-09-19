import { useEffect, useState } from 'react'
import { AddPost } from './add-post'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { DropNav } from './drop-nav'
import { Link } from 'react-router-dom'
import home from '../assets/icons/home.png'
import messenger from '../assets/icons/messenger.png'
import add from '../assets/icons/add.png'
import heart from '../assets/heart.png'
import me from '../assets/me.jpg'


export const AppHeader = () => {

    const [isActive, setIsActive] = useState(false);
    const [user, setUser] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])


    const dispatch = useDispatch()


    const handleClick = () => { setIsActive(current => !current) }

    const logout = () => {
        dispatch({ type: 'LOGUOT' })
        navigate('/login')
    }



    if (user) {
        return (
            < header className="app-header" >
                <Link to='/'>
                    <div className="header-logo">
                        <h1>Instgram</h1>
                    </div>
                </Link>
                <div className="header-search">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header-nav">
                    <Link to='/'><div><img src={home} alt="" /></div></Link>
                    <Link to='/'><div><img src={messenger} alt="" /></div></Link>
                    <AddPost title='Create new post' buttonTitle='Share' imgUrl='https://res.cloudinary.com/demo/image/upload/e_sepia:50/coast.jpg' />
                    <Link to='/'><div><img src={heart} alt="" /></div></Link>
                    <DropNav imgSrc={user.result.userImg} />
                </div>
                <div className='user-drop' style={{ display: isActive ? 'block' : 'none' }}>
                    <div className='user-menu'>
                        <div>Profile</div>
                        <div>Saved</div>
                        <Link to='/setting'><div>Setting</div></Link>
                        <div onClick={logout}>Log Out</div>
                    </div>
                </div>

            </header >

        )
    }
    else return <></>
}