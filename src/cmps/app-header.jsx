import { useState } from 'react'
import { AddPost } from './add-post'
import { Link } from 'react-router-dom'
import home from '../assets/icons/home.png'
import messenger from '../assets/icons/messenger.png'
import add from '../assets/icons/add.png'
import heart from '../assets/heart.png'
import me from '../assets/me.jpg'


export const AppHeader = () => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);

    }

    return (
        <header className="app-header">
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
                <div className='user-img' onClick={handleClick}><img src={me} alt="" /></div>
            </div>
            <div className='user-drop' style={{ display: isActive ? 'block' : 'none' }}>
                <div className='user-menu'>
                    <div>Profile</div>
                    <div>Saved</div>
                    <div>Setting</div>
                    <div>Log Out</div>
                </div>
            </div>

        </header>
    )
}