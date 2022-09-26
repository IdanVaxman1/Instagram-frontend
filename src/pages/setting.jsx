import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editProfile } from '../store/user.actions'
import Input from '../cmps/input'



export const Setting = () => {

    const [formData, setformData] = useState({})

    const user = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch()

    const handleChange = (ev) => { setformData({ ...formData, [ev.target.name]: ev.target.value }) }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        dispatch(editProfile(user.result._id, formData))
    }

    return (
        <section className="setting-container">


            <div className="setting-options">
                <div className='setting-edit'>
                    <span>Edit profile</span>
                </div>
                <div className='setting-password'>
                    <span>Change password</span>
                </div>
            </div>

            <div className="settings">
                <div className='settings-headers'>
                    <div><img src={user.result.userImg} alt="" /></div>
                    <div className='settings-header'>
                        <div className="settings-name"><span>{user.result.fullName}</span></div>
                        <div className="settings-changeImg"><span>Change profile photo</span></div>
                    </div>
                </div>
                <div className='settings-input'>
                    <form onSubmit={handleSubmit}>
                        <div className='setting-input'>
                            <label htmlFor="">Name</label>
                            <Input handleChange={handleChange} type={'text'} name={'fullName'} placeholder={user.result.fullName} />
                        </div>
                        <div className='setting-input'>
                            <label htmlFor="">Email</label>
                            <Input handleChange={handleChange} type={'text'} name={'email'} placeholder={user.result.email} />
                        </div>
                        <div className='setting-input'>
                            <label htmlFor="">Bio</label>
                            <textarea onChange={handleChange} name="userBio" id=""  rows="2"></textarea>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>

    )

}