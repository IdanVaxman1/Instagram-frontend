import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {editProfile} from '../store/user.actions'
import Input from '../cmps/input'



export const Setting = () => {

    const [formData, setformData] = useState({})

    const user = JSON.parse(localStorage.getItem('user'))

    const dispatch = useDispatch()

    const handleChange = (ev) => { setformData({ ...formData, [ev.target.name]: ev.target.value }) }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        dispatch(editProfile(user.result._id , formData))
    }

    return (
        <section className="setting-container">


            <div className="setting-options">
                <div>
                    <span>Edit profile</span>
                </div>
                <div>
                    <span>Change password</span>
                </div>
            </div>

            <div className="settings">
                <div>
                    <span>{user.result.fullName}</span>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Input handleChange={handleChange} type={'text'} name={'fullName'} placeholder={user.result.fullName} />
                        <Input handleChange={handleChange} type={'text'} name={'email'} placeholder={user.result.email} />
                        <textarea onChange={handleChange} name="userBio" id="" cols="40" rows="5"></textarea>

                        <button>Submit</button>

                    </form>
                </div>
            </div>
        </section>

    )

}