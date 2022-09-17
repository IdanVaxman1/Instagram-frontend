import * as api from '../api/index'
import { Navigate } from "react-router-dom";


export const signin = (formData , navigate) => async (dispatch) => {
    


    try {
        const { data } = await api.signIn(formData)
        dispatch({ type: 'AUTH', data })
        console.log('signin work!');
        navigate('/')
    } catch (error) {
        console.log(error);
    }

}

export const signup = (formData , navigate) => async (dispatch) => {

    try {
        const { data } = await api.signUp(formData)
        dispatch({ type: 'AUTH', data })
        navigate('/')

    } catch (error) {
        console.log(error);
    }

}