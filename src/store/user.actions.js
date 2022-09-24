import * as api from '../api/index'


export const signin = (formData, navigate) => async (dispatch) => {

    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: 'AUTH', data })
        console.log('signin work!');
        navigate('/')
    } catch (error) {
        console.log(error);
    }

}

export const signup = (formData, navigate) => async (dispatch) => {

    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: 'AUTH', data })
        navigate('/')

    } catch (error) {
        console.log(error);
    }

}

export const editProfile = (userId, formData) => async (dispatch) => {

    try {

        console.log(formData);
        const { data } = await api.updateUser(userId, formData)
        dispatch({ type: 'UPDATE_USER', data })


    } catch (error) {
        console.log(error);
    }

}

export const following = (userId, profileId) => async (dispatch) => {

    try {
        const { data } = await api.following(profileId, userId)
        dispatch({ type: 'UPDATE_USER', data })

    } catch (error) {
        console.log(error);
    }

}

export const savePost = (userId, postId) => async (dispatch) => {

    try {
        const { data } = await api.savePost(userId, postId)
        dispatch({ type: 'UPDATE_USER', data })

    } catch (error) {
        console.log(error);
    }

}

