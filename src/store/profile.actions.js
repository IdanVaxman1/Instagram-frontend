
import * as api from '../api/index'




export const getUser = (userId) => async (dispatch) => {

    try {

        const { data } = await api.getUser(userId)
        dispatch({ type: 'SET_USER', data })

    } catch (error) {
        console.log(error);
    }

}
export const getUserPosts = (userId) => async (dispatch) => {

    try {
        const { data } = await api.getUserPosts(userId)
        dispatch({ type: 'SET_POSTS', data })
    } catch (error) {
        console.log(error);
    }

}